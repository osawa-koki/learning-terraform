---
title: "🐳🐳🐳 基本構文"
metaTitle: "🤖 Terraform 基本構文 🤖"
metaDescription: "🤖 Terraform 基本構文 🤖"
---

## 基本構文

Terraformでは、以下のような基本構文をとります。  

```terraform
resource "リソースタイプ" "リソース名" {
  リソースの設定
}
```

## リソースタイプ

Terraformでは、以下のようなリソースタイプがあります。  
リソースタイプは、`resource`の後に記載します。  

| リソースタイプ | 説明 |
| --- | --- |
| `aws_instance` | AWS EC2インスタンス |
| `aws_s3_bucket` | AWS S3バケット |
| `aws_s3_bucket_object` | AWS S3バケットオブジェクト |
| `aws_s3_bucket_policy` | AWS S3バケットポリシー |
| `aws_s3_bucket_public_access_block` | AWS S3バケットパブリックアクセスブロック |
| `aws_s3_bucket_notification` | AWS S3バケット通知 |
| `aws_s3_bucket_metric` | AWS S3バケットメトリクス |
| `aws_s3_bucket_inventory` | AWS S3バケットインベントリ |
| `aws_s3_bucket_analytics_configuration` | AWS S3バケットアナリティクス設定 |
| `aws_s3_bucket_ownership_controls` | AWS S3バケット所有権制御 |
| `aws_s3_bucket_website` | AWS S3バケットウェブサイト |
| `aws_s3_bucket_object_lock_configuration` | AWS S3バケットオブジェクトロック設定 |
| `aws_s3_bucket_lifecycle_configuration` | AWS S3バケットライフサイクル設定 |
| `aws_s3_bucket_cors` | AWS S3バケットCORS |
| `aws_s3_bucket_replication` | AWS S3バケットレプリケーション |

## リソース名

リソース名は、`resource`の後に記載します。  
リソース名とは、Terraformで作成するリソースの名前です。  

## リソースの設定

リソースの設定は、`resource`の後のブロック内に記載します。  

### リソースの設定の例

```terraform
resource "aws_instance" "example" {
  ami           = "ami-12345678"
  instance_type = "t2.micro"
}
```

## プロバイダー

Terraformでは、以下のようなプロバイダーがあります。  
プロバイダーは、`provider`の後に記載します。  

| プロバイダー | 説明 |
| --- | --- |
| `aws` | AWS |
| `azurerm` | Azure |
| `google` | Google Cloud Platform |
| `null` | Null |
| `random` | Random |
| `template` | Template |
| `tls` | TLS |

## プロバイダーの設定

プロバイダーの設定は、`provider`の後のブロック内に記載します。  

### プロバイダーの設定の例

```terraform
provider "aws" {
  region = "ap-northeast-1"
}
```
