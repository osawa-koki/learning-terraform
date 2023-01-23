---
title: "🦀🦀🦀 ディレクトリ構成"
metaTitle: "🤖 Terraformディレクトリ構成 🤖"
metaDescription: "🤖 Terraformディレクトリ構成 🤖"
---

## ディレクトリ構成

Terraformでは、以下のようなディレクトリ構成をとることが多いです。  

```shell
.
├── main.tf
├── variables.tf
├── outputs.tf
├── terraform.tfvars
└── terraform.tfstate
```

### main.tf

`main.tf`は、Terraformの設定ファイルです。  
実際にクラウドリソースを作成するための設定を記載します。  

### variables.tf

`variables.tf`は、Terraformの変数定義ファイルです。  

### outputs.tf

`outputs.tf`は、Terraformの出力定義ファイルです。  
`main.tf`で作成したリソースの情報を、このファイルに記載します。  

### terraform.tfvars

`terraform.tfvars`は、Terraformの変数定義ファイルです。  
`variables.tf`で定義した変数に値を設定します。  

シークレット情報などは、このファイルに記載してGit管理対象外にします。  

### terraform.tfstate

`terraform.tfstate`は、Terraformの状態ファイルです。  
Terraformで作成したリソースの情報が記載されています。  
