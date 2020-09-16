# How to use

You must have an aws access id, and aws secret key, to change any part of the infrastructure.
Example:

// terraform.tfvars
```

website_domain = "issues.elvisgastelum.com"

website_subdomain = "issues"

region = "us-west-1"

website_bucket_name = "issues.elvisgastelum.com"

project_name = "react-issues"

website_zone = "elvisgastelum.com."
```

To init the terraform project
```bash
cli-tools --terraform-init
```
![image](https://user-images.githubusercontent.com/43228550/93279251-aafd8180-f77b-11ea-989d-9d176ceb266d.png)

To create terraform plan
```bash
cli-tools --terraform-plan
```
![image](https://user-images.githubusercontent.com/43228550/93243113-951c9c00-f73c-11ea-8ddf-2a93ad20a5f0.png)

To apply the terraform plan
```bash
cli-tools --terraform-apply
```
![image](https://user-images.githubusercontent.com/43228550/93243388-fa708d00-f73c-11ea-9bd0-5feda81201e6.png)

