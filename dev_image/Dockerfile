FROM ubuntu:bionic
ENV TF_VAR_aws_access_key="anaccesskey"
ENV TF_VAR_aws_secret_key="asecretkey"

RUN apt-get update \
    && apt-get install curl unzip vim apt-transport-https gnupg git software-properties-common -y \
    && curl https://releases.hashicorp.com/terraform/0.12.29/terraform_0.12.29_linux_amd64.zip -o terraform.zip \
    && unzip -o terraform.zip -d terraform \
    && mv terraform/terraform /usr/bin \
    && mkdir /root/.aws \
    && echo 'alias tf="terraform"' >> ~/.bashrc \
    && curl https://raw.githubusercontent.com/ElvisGastelum/.vim/master/install-from-docker.sh | bash

WORKDIR /development