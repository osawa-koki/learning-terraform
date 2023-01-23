---
title: "🐳🐳🐳 ディレクトリ構成"
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

`main.tf` は、Terraformの設定ファイルです。  
`main.tf` には、Terraformで管理するリソースの定義を記述します。
