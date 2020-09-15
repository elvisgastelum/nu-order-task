![portada](https://user-images.githubusercontent.com/43228550/88612521-427a0a00-d040-11ea-99aa-0eef6c119e50.png)
# React Issues List
[![Demo](https://img.shields.io/badge/demo-website-green)](https://issues.elvisgastelum.com/)
![CI/CD](https://github.com/ElvisGastelum/nu-order-task/workflows/CI/CD/badge.svg)
[![codecov](https://codecov.io/gh/ElvisGastelum/nu-order-task/branch/master/graph/badge.svg)](https://codecov.io/gh/ElvisGastelum/nu-order-task)

## Description
This project is an application with a suggestions input box for searching issues for
[React’s repo](https://github.com/facebook/react/issues)

The input and results are navigatable via keyboard shortcuts. 
Each result can be found through issue’s title, labels or description.

## Demo
You can watch a live demo of the component in this [link](https://issues.elvisgastelum.com/).

## CLI Tools
### Prerequisites
>  - Docker
>  - AWS Credencials

First, create a .secrets folder and env.list file

![image](https://user-images.githubusercontent.com/43228550/93243781-8d112c00-f73d-11ea-8de1-a825fc5603d3.png)

You must be set this variables

![image](https://user-images.githubusercontent.com/43228550/93244054-f85afe00-f73d-11ea-8cc0-44a0558949ca.png)

To build the develop container
```bash
./cli-tools.sh --build-only
```
![image](https://user-images.githubusercontent.com/43228550/93244863-3ad10a80-f73f-11ea-99f0-62e2ba86a4b9.png)

To init the develop container run
```bash
./cli-tools.sh
```
![image](https://user-images.githubusercontent.com/43228550/93241543-538af180-f73a-11ea-8ab8-33a9952d34e5.png)

To display CLI Tools options
```bash
cli-tools --help
```
![image](https://user-images.githubusercontent.com/43228550/93242628-f55f0e00-f73b-11ea-9200-55e816cd25c4.png)

To install dependencies
```bash
cli-tools --install-dependencies
```
![image](https://user-images.githubusercontent.com/43228550/93242052-11ae7b00-f73b-11ea-9ae5-4a94a1775fb7.png)


To start the project
```bash
cli-tools --start
```
![image](https://user-images.githubusercontent.com/43228550/93241710-9b117d80-f73a-11ea-9fd5-509dc6dba3c1.png)

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



