---
title: "ðï¸ðï¸ðï¸ åºæ¬çãªæµã"
metaTitle: "ð¤ Terraform åºæ¬çãªæµã ð¤"
metaDescription: "ð¤ Terraform åºæ¬çãªæµã ð¤"
---

## åºæ¬çãªæµã

Terraformãä½¿ã£ã¦AWSã®ãªã½ã¼ã¹ãæ§ç¯ããéã®åºæ¬çãªæµãã¯ä»¥ä¸ã®éãã§ãã  

![åºæ¬çãªæµã](/img/workflow.png)  

## Let's Demo

Terraformãä½¿ã£ã¦AWSã®ãªã½ã¼ã¹ãæ§ç¯ããéã®åºæ¬çãªæµãããå®éã«Terraformãä½¿ã£ã¦æ§ç¯ãã¦ã¿ã¾ãããã  
ããã§ã¯Terraformãä½¿ã£ã¦Dockerç°å¢ãæ§ç¯ãã¾ãã  

### Dockerã®ã¤ã³ã¹ãã¼ã«

Dockerã®ã¤ã³ã¹ãã¼ã«ãå®äºãã¦ããªãå ´åã«ã¯ãã¤ã³ã¹ãã¼ã«ãè¡ãã¾ãã  
Dockerã®ã¤ã³ã¹ãã¼ã«ã¯ã[å¬å¼ãµã¤ã](https://docs.docker.com/get-docker/)ããè¡ãã¾ãã  

---

ã§ã¯ãå®éã«Terraformãä½¿ã£ã¦Dockerã³ã³ãããæ§ç¯ãã¦ã¿ã¾ãããã  

æåã«ãTerraformãã¡ã¤ã«ãä½æãã¾ãã  
ååã¯`main.tf`ã¨ãã¾ãã  

```terraform
terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 2.6"
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

Terraformãã¡ã¤ã«ãä½æããããTerraformãåæåãã¾ãã  

```shell
terraform init
```

æå¾ã«ãTerraformãå®è¡ãã¾ãã  

```shell
terraform apply
```

å®è¡ãå®äºãããããã©ã¦ã¶ã§`http://localhost:8000`ã«ã¢ã¯ã»ã¹ãã¾ãã  
ã¾ãã`docker ps`ã§ã³ã³ãããèµ·åãã¦ãããã¨ãç¢ºèªãã¾ãã  

```shell
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS          PORTS                    NAMES
f3b0b0b5b0b0   nginx     "/docker-entrypoint.â¦"   20 seconds ago   Up 19 seconds
```

åä½ãç¢ºèªã§ããããTerraformãç ´æ£ãã¾ãã  

```shell
terraform destroy
```

ç ´æ£ãå®äºãããã`docker ps`ã§ã³ã³ãããåæ­¢ãã¦ãããã¨ãç¢ºèªãã¾ãã  

```shell
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
```

---

![Terraform](/img/terraform-demo.gif)  

ããã§ç°¡åãªTerrafomã®å®è¡ãå®äºãã¾ããã  
æ¬¡ããã¯ãTerraformã®æ§æããTerraformãä½¿ã£ã¦AWSã®ãªã½ã¼ã¹ãæ§ç¯ããæ¹æ³ãå­¦ãã§ããã¾ãããã  

## ã¾ã¨ã

Terraformãä½¿ã£ã¦AWSã®ãªã½ã¼ã¹ãæ§ç¯ããéã®åºæ¬çãªæµãã¯ä»¥ä¸ã®éãã§ãã  

1. Terraformãã¡ã¤ã«ãä½æãã
2. Terraformãåæåãã
3. Terraformãå®è¡ãã
4. Terraformãç ´æ£ãã
