---
title: "🤖🤖🤖 Terraform"
metaTitle: "🤖🤖🤖 Learning Tetaform 🤖🤖🤖"
metaDescription: "🤖🤖🤖 Learning Tetaform 🤖🤖🤖"
---

## Terraformとは

Infrastructure as Code(IaC)を実現する技術で、AWS・Azure・GCPなどのクラウドサービスのインフラをコードで管理することができます。  
`.tf`という拡張子のファイルを作成し、その中にインフラの設定を記述することで、インフラをコードで管理することができます。  

## サポートしているクラウドサービス

一般的なクラウドサービスに対応しています。  

- AWS
- Azure
- GCP
- Kubernetes
- Alibaba Cloud
- Oracle Cloud Infrastructure

参考: [Terraform - Providers](https://registry.terraform.io/browse/providers)  

## 公式チュートリアル

公式のチュートリアルは、複数のクラウドサービスに対応しています。  
<https://developer.hashicorp.com/terraform/tutorials#get-started>  

ここでは、AWSを使用して、インフラをコードで管理する方法を学びます。  
<https://developer.hashicorp.com/terraform/tutorials/aws-get-started>  

## Terraformの仕組み

各クラウドサービスのAPIを呼び出して、インフラを構築します。  
開発者は、Terraformのコマンドを実行するだけで、インフラを構築することができます。  

その指示として、Terraformは、`.tf`という拡張子のファイルを読み込みます。  
このファイルにインフラの設定を記述します。  

![Terraformの仕組み](./img/terraform-architecture.avif)  
