---
title: "🏞️🏞️🏞️ 基本的な流れ"
metaTitle: "🤖 Terraform 基本的な流れ 🤖"
metaDescription: "🤖 Terraform 基本的な流れ 🤖"
---

## 基本的な流れ

Terraformを使ってAWSのリソースを構築する際の基本的な流れは以下の通りです。  

![基本的な流れ](/img/workflow.png)  

## Let's Demo

Terraformを使ってAWSのリソースを構築する際の基本的な流れを、実際にTerraformを使って構築してみましょう。  
ここではTerraformを使ってDocker環境を構築します。  

### Dockerのインストール

Dockerのインストールが完了していない場合には、インストールを行います。  
Dockerのインストールは、[公式サイト](https://docs.docker.com/get-docker/)から行います。  

---

では、実際にTerraformを使ってDockerコンテナを構築してみましょう。  

最初に、Terraformファイルを作成します。  
名前は`main.tf`とします。  

```terraform
terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 2.15.0"
    }
  }
}

provider "docker" {}

resource "docker_image" "nginx" {
  name         = "nginx:latest"
  keep_locally = false
}

resource "docker_container" "nginx" {
  image = docker_image.nginx.latest
  name  = "tutorial"
  ports {
    internal = 80
    external = 8000
  }
}
```

Terraformファイルを作成したら、Terraformを初期化します。  

```shell
terraform init
```

最後に、Terraformを実行します。  

```shell
terraform apply
```

実行が完了したら、ブラウザで`http://localhost:8000`にアクセスします。  
また、`docker ps`でコンテナが起動していることを確認します。  

```shell
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS          PORTS                    NAMES
f3b0b0b5b0b0   nginx     "/docker-entrypoint.…"   20 seconds ago   Up 19 seconds
```
