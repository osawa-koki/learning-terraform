---
title: "ðï¸ðï¸ðï¸ åºæ¬ææ³"
metaTitle: "ð¤ Terraform åºæ¬ææ³ ð¤"
metaDescription: "ð¤ Terraform åºæ¬ææ³ ð¤"
---

## åºæ¬ææ³

`.tf`ãã¡ã¤ã«ã§ã¯ãä¸è¬çãªãã­ã°ã©ãã³ã°è¨èªã¨åãããã«ãå¤æ°ãé¢æ°ãä½¿ã£ã¦è¨­å®ãè¨è¼ãããã¨ãã§ãã¾ãã  
ä¾ãã°ãä»¥ä¸ã®ãããªæ©è½ãä½¿ç¨ã§ãã¾ãã  

- ã³ã¡ã³ãã¢ã¦ã
- å¤æ°
- ç®è¡æ¼ç®
- è«çæ¼ç®
- æ¯è¼æ¼ç®

## ã³ã¡ã³ãã¢ã¦ã

Terraformã§ã¯ã`#`ãä½¿ã£ã¦ã³ã¡ã³ãã¢ã¦ããããã¨ãã§ãã¾ãã  
è¤æ°è¡ãã³ã¡ã³ãã¢ã¦ãããå ´åã¯ã`/*`ã¨`*/`ãä½¿ãã¾ãã  

```terraform
# 1è¡ã³ã¡ã³ãã¢ã¦ã

/*
è¤æ°è¡ã³ã¡ã³ãã¢ã¦ã
*/

```

## å¤æ°

Terraformã§ã¯ã`variable`ãä½¿ã£ã¦å¤æ°ãå®ç¾©ãããã¨ãã§ãã¾ãã  
å¤æ°ã®å®ç¾©ã¯ã`variables.tf`ãã¡ã¤ã«ã«è¨è¼ãã¾ãã  

```terraform
variable "name" {
  type        = string
  description = "å¤æ°ã®èª¬æ"
  default     = "default"
}
```

å¤æ°ã®å®ç¾©ã«ã¯ãä»¥ä¸ã®ãããªãã©ã¡ã¼ã¿ãæå®ã§ãã¾ãã  

- `type` : å¤æ°ã®åãæå®ãã¾ãã  
  - `string` : æå­åå
  - `number` : æ°å¤å
  - `bool` : çå½å¤å
  - `list` : ãªã¹ãå
  - `map` : ãããå
  - `object` : ãªãã¸ã§ã¯ãå
- `description` : å¤æ°ã®èª¬æãæå®ãã¾ãã
- `default` : å¤æ°ã®ããã©ã«ãå¤ãæå®ãã¾ãã

å¤æ°ã®å®ç¾©ã¯ã`main.tf`ãã¡ã¤ã«ã§ä½¿ç¨ãããã¨ãã§ãã¾ãã  

```terraform
resource "aws_instance" "example" {
  ami           = var.ami
  instance_type = var.instance_type
}
```

å¤æ°ã®å¤ã¯ã`terraform.tfvars`ãã¡ã¤ã«ã«è¨è¼ãã¾ãã  
  
```terraform
ami           = "ami-1234567890"
instance_type = "t2.micro"
```

---

Terraformã§ã¯ã`locals`ãä½¿ã£ã¦ã­ã¼ã«ã«å¤æ°ãå®ç¾©ãããã¨ãã§ãã¾ãã  
ã­ã¼ã«ã«å¤æ°ã®å®ç¾©ã¯ã`locals.tf`ãã¡ã¤ã«ã«è¨è¼ãã¾ãã  

```terraform
locals {
  name = "example"
}
```

## ç®è¡æ¼ç®

Terraformã§ã¯ã`+`ã`-`ã`*`ã`/`ã`%`ãä½¿ã£ã¦ç®è¡æ¼ç®ãè¡ããã¨ãã§ãã¾ãã  

```terraform
resource "aws_instance" "example" {
  ami           = var.ami
  instance_type = var.instance_type
  count         = 2 + 2
}
```

## è«çæ¼ç®

Terraformã§ã¯ã`&&`ã`||`ã`!`ãä½¿ã£ã¦è«çæ¼ç®ãè¡ããã¨ãã§ãã¾ãã  

```terraform
resource "aws_instance" "example" {
  ami           = var.ami
  instance_type = var.instance_type
  count         = 2 + 2
  depends_on    = [aws_instance.example1, aws_instance.example2]
}
```

## æ¯è¼æ¼ç®

Terraformã§ã¯ã`==`ã`!=`ã`>`ã`>=`ã`<`ã`<=`ãä½¿ã£ã¦æ¯è¼æ¼ç®ãè¡ããã¨ãã§ãã¾ãã  

```terraform
resource "aws_instance" "example" {
  ami           = var.ami
  instance_type = var.instance_type
  count         = 2 + 2
  depends_on    = [aws_instance.example1, aws_instance.example2]
  tags = {
    Name = "example"
  }
}
```

## æ¡ä»¶åå²

Terraformã§ã¯ã`if`ã`else`ãä½¿ã£ã¦æ¡ä»¶åå²ãè¡ããã¨ãã§ãã¾ãã  

```terraform
resource "aws_instance" "example" {
  ami           = var.ami
  instance_type = var.instance_type
  count         = 2 + 2
  depends_on    = [aws_instance.example1, aws_instance.example2]
  tags = {
    Name = "example"
  }
  user_data = if var.user_data == "" then null else var.user_data
}
```

## ç¹°ãè¿ã

Terraformã§ã¯ã`for`ãä½¿ã£ã¦ç¹°ãè¿ããè¡ããã¨ãã§ãã¾ãã  

```terraform
resource "aws_instance" "example" {
  ami           = var.ami
  instance_type = var.instance_type
  count         = 2 + 2
  depends_on    = [aws_instance.example1, aws_instance.example2]
  tags = {
    Name = "example"
  }
  user_data = if var.user_data == "" then null else var.user_data
  for_each = toset(var.subnets)
}
```

ã¾ãã`for_each`ãä½¿ã£ã¦ããªã¹ãããããã®è¦ç´ ãç¹°ãè¿ãå¦çãããã¨ãã§ãã¾ãã  

```terraform
resource "aws_instance" "example" {
  ami           = var.ami
  instance_type = var.instance_type
  count         = 2 + 2
  depends_on    = [aws_instance.example1, aws_instance.example2]
  tags = {
    Name = "example"
  }
  user_data = if var.user_data == "" then null else var.user_data
  for_each = toset(var.subnets)
  subnet_id = each.key
}
```
