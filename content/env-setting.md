---
title: "環境構築"
metaTitle: "🤖 Terraform 環境構築 🤖"
metaDescription: "🤖 Terraform 環境構築 🤖"
---

## Terraformのインストール

ここからはWindows環境でのインストール方法を記載します。  

Terraformのインストールは、[公式サイト](https://www.terraform.io/downloads.html)から行います。  

ダウンロードしたZIPファイルを解凍し、中に`terraform.exe`ファイルが存在することを確認します。  
当該実行可能プログラムまでのパスを環境変数`PATH`に追加します。  

```powershell
# 環境変数PATHに追加
$env:PATH += ";C:/★パス★"
```

```powershell
# 環境変数PATHに追加されているか確認
$env:PATH
```

以下のコマンドで、Terraformのバージョンが表示されれば、インストール完了です。  

```powershell
# Terraformのバージョンを確認
terraform -v
```

自分の環境では以下のように表示されました。  

```powershell
Terraform v1.3.7
on windows_386
```