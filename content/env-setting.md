---
title: "🌳🌳🌳 環境構築"
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

## AWSアカウントの作成

おそらく、AWSアカウントを持っている方が多いと思いますが、まだ持っていない方は、[こちら](https://aws.amazon.com/jp/)から作成してください。  
個人であれば、無料枠で十分です。  

## AWS CLIのインストール

次に、AWS CLIをインストールします。  
AWS CLIは、AWSのAPIを呼び出すためのコマンドラインツールです。  

AWS CLIのインストールは、[公式サイト](https://docs.aws.amazon.com/ja_jp/cli/latest/userguide/getting-started-install.html)から行います。  

ダウンロードが完了したら、そのままインストールを行います。  
ダウンロードしたファイルを実行すると、インストールウィザードが表示されます。  
そのまま進めていくと、インストールが完了します。  

インストールが完了したら、以下のコマンドで、AWS CLIのバージョンが表示されれば、インストール完了です。  

```powershell
aws --version
```

自分の環境では以下のように表示されました。  

```powershell
aws-cli/2.9.17 Python/3.9.11 Windows/10 exe/AMD64 prompt/off
```

## AWS CLIの設定

AWS CLIをインストールしたら、次に、AWS CLIの設定を行います。  
AWS CLIの設定は、AWSのアクセスキーとシークレットキーを設定することで行います。  

AWSのアクセスキーとシークレットキーは、AWSのマネジメントコンソールから取得します。  
マネジメントコンソールにログインし、右上のアカウント名をクリックします。  
その後、マイセキュリティ資格情報をクリックします。  

左のメニューに表示されているユーザをクリックします。  
その後、対象のユーザを選択します。  
ユーザがない場合は、ユーザを作成します。  

ユーザを選択したら、アクセスキーを作成します。  
アクセスキーを作成すると、アクセスキーIDとシークレットアクセスキーが表示されます。  
アクセスキーIDとシークレットアクセスキーは、AWS CLIの設定に使用します。  

```powershell
# AWS CLIの設定
aws configure
```

以下のように入力します。  

```powershell
AWS Access Key ID [None]: ★アクセスキーID★
AWS Secret Access Key [None]: ★シークレットアクセスキー★
Default region name [None]: ap-northeast-1
Default output format [None]: json
```

## AWS CLIの動作確認

AWS CLIの設定が完了したら、次に、AWS CLIの動作確認を行います。  
以下のコマンドで、AWSのアカウント情報が表示されれば、動作確認完了です。  

```powershell
aws sts get-caller-identity
```

以下のように表示されれば、動作確認完了です。  

```powershell
{
  "UserId": "★ユーザID★",
  "Account": "★アカウントID★",
  "Arn": "★ARN★"
}
```
