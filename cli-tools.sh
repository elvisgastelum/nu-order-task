#!/bin/bash
docker_image='elvisgastelum/nu-order-task-terraform:0.12.29'
env_list='.secrets/env.list'
version='0.1.0'

function build_image()
{
  docker build -t ${docker_image} --file dev_image/Dockerfile .
}

function run_image()
{
  # Mount terraform code
  # Load your secrets
  if [[ -f .secrets/env.list ]]; then
    if [ "$1" = "--port" ]; then
      docker run -it --rm \
      -v "$(pwd)":/development \
      -v "$(pwd)/cli-tools.sh":/usr/bin/cli-tools \
      -v $HOME/.ssh:/root/.ssh \
      -v $HOME/.gitconfig:/root/.gitconfig \
      -p 3000:3000 \
      --env-file ${env_list} \
      ${docker_image} /bin/bash
    else
      docker run -it --rm \
      -v "$(pwd)":/development \
      -v "$(pwd)/cli-tools.sh":/usr/bin/cli-tools \
      -v $HOME/.ssh:/root/.ssh \
      -v $HOME/.gitconfig:/root/.gitconfig \
      --env-file ${env_list} \
      ${docker_image} /bin/bash
    fi
  else
      echo "Please create .secrets/env.list file before running the container";
      exit 1
  fi
}


function build_once_and_run()
{
  # Build if imaage if not exists
  if [[ "$(docker image ls -q ${docker_image})" = "" ]]; then
    # Build
    build_image
  fi
  # Run
  run_image --port
}

function not_arg_found()
{
  argument=$1
  echo "$argument is not a valid argument"
  echo
  help
}

function check_docker_install()
{
  if [ ! -x "$(command -v docker)" ]; then
    echo "You need install docker before using this script"
    exit 1
  fi
}

function check_terraform_install()
{
  if [ ! -x "$(command -v terraform)" ]; then
    echo "You need install terraform before use this option. or run ./cli-tools.sh -R"
    exit 1
  fi
}

function terraform_init()
{
  terraform init
}

function terraform_plan()
{
  terraform plan -out=tfplan
}

function terraform_apply()
{
  terraform apply tfplan
}

function help()
{
   # Display Help
   echo "CLI tools container"
   echo "Version $version"
   echo
   echo "Syntax: cli-tools [-b|r|h|R|p|a|s|i|S]"
   echo "options:"
   echo "-b, --build-only           Build only CLI tools image ${docker_image}."
   echo "-h, --help                 Print this Help."
   echo "-r, --run-only             Run a ${docker_image} container."
   echo "     to bridge the port from container when run, use '--port'"
   echo "     Example:"
   echo "             cli-tools -r --port"
   echo "             cli-tools -R --port"
   echo "-R, --build-run            Rebuild ${docker_image} image and run container."
   echo "    --terraform-init       Init the terraform project. (from container)"
   echo "-p, --terraform-plan       Generate terraform plan. (from container)"
   echo "-a, --terraform-apply      Apply from terraform plan. (from container)"
   echo "-s, --start                Start the development server (from container)"
   echo "-i, --install-dependencies Install the dependencies of the project (from container)"
   echo "-S                         Install the dependencies and start the development server (from container)"
   echo
   echo "                           [without arguments] Build image if not exists and run with port bridge." 
}

case $1 in
  --build-only|-b)
    check_docker_install
    build_image;
    exit 0
  ;;
  --run-only|-r)
    check_docker_install
    run_image ${@:2}
    exit 0
  ;;
  --help|-h)
    help
    exit 0
  ;;
  --version|-v)
    echo $version
    exit 0
  ;;
  --build-run|-R)
    check_docker_install
    build_image && run_image $2
    exit 0
  ;;
  --terraform-init)
    check_terraform_install
    terraform_init
    exit 0
  ;;
  --terraform-plan|-p)
    check_terraform_install
    terraform_plan
    exit 0
  ;;
  --terraform-apply|-a)
    check_terraform_install
    terraform_apply
    exit 0
  ;;
  --start|-s)
    npm start
    exit 0
  ;;
  --install-dependencies|-i)
    npm install
    exit 0
  ;;
  -S)
    npm install && npm start
    exit 0
  ;;
  *)
    if [  "$1" = "" ]; then
      check_docker_install
      build_once_and_run
      exit 0
    fi
    not_arg_found $@
    exit 1
  ;;
esac
