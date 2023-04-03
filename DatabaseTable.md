# コレクション構造メモ

## users
authのuuid (unique)
  - name (user_name): string
  - accountId (初期値はランダム) : string
  - imageUrl: string
  - followCount: number
  - followerCount: number
  - myPostCount: number
  - timestamp: Timestamp

### 以下、サブコレクション

#### 自分の投稿
myPosts
  - postId
    - userId: string
    - timestamp: Timestamp

#### タイムラインに表示される投稿
timelines
  - postId: string
  - timestamp: Timestamp

#### フォローしてるユーザー
follows
  - userIdL: string
  - timestamp: Timestamp


#### フォローされているユーザー
followers
  - userId: string
  - timestamp: Timestamp


## posts
id
text
timestamp