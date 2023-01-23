---
title: "👽👽👽 基本コマンド"
metaTitle: "🤖 Terraform 基本コマンド 🤖"
metaDescription: "🤖 Terraform 基本コマンド 🤖"
---

## 基本コマンド

Terraform には、以下のようなコマンドがあります。  

| コマンド | 概要 |
| --- | --- |
| init | 初期化 |
| plan | 実行計画 |
| apply | 実行 |
| destroy | 破棄 |
| show | 状態の表示 |
| output | 出力の表示 |
| refresh | 状態の更新 |
| taint | 破棄対象の指定 |
| untaint | 破棄対象の解除 |
| validate | 構文チェック |
| version | バージョンの表示 |
| fmt | フォーマット |

## コマンドの実行

Terraform コマンドは、以下のように実行します。  

```shell
terraform <command> [options]
```

## コマンドのオプション

Terraform コマンドは、以下のようなオプションがあります。  

| オプション | 概要 |
| --- | --- |
| -chdir | ディレクトリの指定 |
| -no-color | カラー出力の無効化 |
| -lock | ロックの有効化 |
| -lock-timeout | ロックのタイムアウト時間 |
| -input | 入力の有効化 |
| -var | 変数の指定 |
| -var-file | 変数ファイルの指定 |
| -state | ステートファイルの指定 |
| -state-out | ステートファイルの出力先の指定 |
| -backup | ステートファイルのバックアップの有効化 |
| -parallelism | 並列実行数の指定 |
| -refresh | ステートの更新の有効化 |
| -target | 対象の指定 |
| -module-depth | モジュールの深さの指定 |
| -force-copy | モジュールの強制コピーの有効化 |
| -get-plugins | プラグインの取得の有効化 |
| -plugin-dir | プラグインのディレクトリの指定 |
| -backend | バックエンドの指定 |
| -backend-config | バックエンドの設定の指定 |
| -get | モジュールの取得の有効化 |
| -get-plugins | プラグインの取得の有効化 |
| -plugin-dir | プラグインのディレクトリの指定 |
| -verify-plugins | プラグインの検証の有効化 |
| -help | ヘルプの表示 |
| -version | バージョンの表示 |

これらは、`terraform <command> -help` で確認できます。  

## terraform init

`init` コマンドは、Terraform の初期化を行います。  

```shell
terraform init [options]
```

### バックエンドの指定

バックエンドの指定は、`-backend` オプションで行います。  

```shell
terraform init -backend=true
```

### バックエンドの設定の指定

バックエンドの設定の指定は、`-backend-config` オプションで行います。  

```shell
terraform init -backend-config="key
```

### モジュールの取得の有効化

モジュールの取得の有効化は、`-get` オプションで行います。  

```shell
terraform init -get=true
```

### プラグインの取得の有効化

プラグインの取得の有効化は、`-get-plugins` オプションで行います。  

```shell
terraform init -get-plugins=true
```

### プラグインのディレクトリの指定

プラグインのディレクトリの指定は、`-plugin-dir` オプションで行います。  

```shell
terraform init -plugin-dir=/path/to/plugin
```

### プラグインの検証の有効化

プラグインの検証の有効化は、`-verify-plugins` オプションで行います。  

```shell
terraform init -verify-plugins=true
```

## terraform plan

`plan` コマンドは、Terraform の実行計画を表示します。  

```shell
terraform plan
```

## terraform apply

`apply` コマンドは、Terraform の実行を行います。  

```shell
terraform apply
```

## terraform destroy

`destroy` コマンドは、Terraform の破棄を行います。  

```shell
terraform destroy
```

## terraform show

`show` コマンドは、Terraform の状態の表示を行います。  

```shell
terraform show
```

## terraform output

`output` コマンドは、Terraform の出力の表示を行います。  

```shell
terraform output
```

## terraform refresh

`refresh` コマンドは、Terraform のステートの更新を行います。  

```shell
terraform refresh
```

## terraform taint

`taint` コマンドは、Terraform のリソースの汚染を行います。  

```shell
terraform taint
```

## terraform untaint

`untaint` コマンドは、Terraform のリソースの汚染の解除を行います。  

```shell
terraform untaint
```
