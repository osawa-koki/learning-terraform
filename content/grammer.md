---
title: "🖌️🖌️🖌️ 基本文法"
metaTitle: "🤖 Terraform 基本文法 🤖"
metaDescription: "🤖 Terraform 基本文法 🤖"
---

## 基本文法

`.tf`ファイルでは、一般的なプログラミング言語と同じように、変数や関数を使って設定を記載することができます。  
例えば、以下のような機能を使用できます。  

- コメントアウト
- 変数
- 算術演算
- 論理演算
- 比較演算

## コメントアウト

Terraformでは、`#`を使ってコメントアウトすることができます。  
複数行をコメントアウトする場合は、`/*`と`*/`を使います。  

```terraform
# 1行コメントアウト

/*
複数行コメントアウト
*/

```

## 変数

Terraformでは、`variable`を使って変数を定義することができます。  
変数の定義は、`variables.tf`ファイルに記載します。  

```terraform
variable "name" {
  type        = string
  description = "変数の説明"
  default     = "default"
}
```

変数の定義には、以下のようなパラメータを指定できます。  

- `type` : 変数の型を指定します。  
  - `string` : 文字列型
  - `number` : 数値型
  - `bool` : 真偽値型
  - `list` : リスト型
  - `map` : マップ型
  - `object` : オブジェクト型
- `description` : 変数の説明を指定します。
- `default` : 変数のデフォルト値を指定します。

変数の定義は、`main.tf`ファイルで使用することができます。  

```terraform
resource "aws_instance" "example" {
  ami           = var.ami
  instance_type = var.instance_type
}
```

変数の値は、`terraform.tfvars`ファイルに記載します。  
  
```terraform
ami           = "ami-1234567890"
instance_type = "t2.micro"
```

---

Terraformでは、`locals`を使ってローカル変数を定義することができます。  
ローカル変数の定義は、`locals.tf`ファイルに記載します。  

```terraform
locals {
  name = "example"
}
```

## 算術演算

Terraformでは、`+`、`-`、`*`、`/`、`%`を使って算術演算を行うことができます。  

```terraform
resource "aws_instance" "example" {
  ami           = var.ami
  instance_type = var.instance_type
  count         = 2 + 2
}
```

## 論理演算

Terraformでは、`&&`、`||`、`!`を使って論理演算を行うことができます。  

```terraform
resource "aws_instance" "example" {
  ami           = var.ami
  instance_type = var.instance_type
  count         = 2 + 2
  depends_on    = [aws_instance.example1, aws_instance.example2]
}
```

## 比較演算

Terraformでは、`==`、`!=`、`>`、`>=`、`<`、`<=`を使って比較演算を行うことができます。  

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

## 条件分岐

Terraformでは、`if`、`else`を使って条件分岐を行うことができます。  

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

## 繰り返し

Terraformでは、`for`を使って繰り返しを行うことができます。  

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

また、`for_each`を使って、リストやマップの要素を繰り返し処理することができます。  

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
