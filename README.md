# iam-share-test

## 最終更新日
2023-02-23

## このリポジトリについて  
Serverless Frameworkで、API GatewayとLambdaの定義を別にするサンプル

## 使い方  
- Serverless Frameworkで、API GatewayとLambdaの定義を別にするやり方の参考にしてください。

- またiam-share-firstのserverless.ymlでCloudFormationのOutputに値を格納して、iam-share-secondのserverless.ymlでその値をCloudFormationから取り出す、なんてこともしていますので、そのやり方の参考にもなります
    
- コマンドパレットから、「Rebuild and Reopen...」なり「Open Folder in Container」なりでDevContainerからコンテナを開く。(コンテナで開かないと何もできない)  
  
- 開いた先(workdir)の「src」フォルダ以下に各種ソースがあるので、そのソースを編集して、AWSにデプロイする。  
  
- AWSの管理にはServerless Frameworkを使う(DockerFile内でインストールしている)。`yarn xxx`コマンドで実行する。(コマンドはコンテナのworkdir/package.jsonを参照)
