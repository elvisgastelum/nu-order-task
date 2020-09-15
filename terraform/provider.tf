provider "aws" {
	access_key = var.aws_access_key
	secret_key = var.aws_secret_key
	region = var.region
}

provider "aws" {
  alias  = "east"
  access_key = var.aws_access_key
  secret_key = var.aws_secret_key
  region = "us-east-1"
}
