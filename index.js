const express = require('express')
require ('dotenv').config()
// import express from "express"
const app = express()
// const port = 3000

const gitdata={
  "login": "Muhammad5Ali",
  "id": 165441971,
  "node_id": "U_kgDOCdxxsw",
  "avatar_url": "https://avatars.githubusercontent.com/u/165441971?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Muhammad5Ali",
  "html_url": "https://github.com/Muhammad5Ali",
  "followers_url": "https://api.github.com/users/Muhammad5Ali/followers",
  "following_url": "https://api.github.com/users/Muhammad5Ali/following{/other_user}",
  "gists_url": "https://api.github.com/users/Muhammad5Ali/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Muhammad5Ali/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Muhammad5Ali/subscriptions",
  "organizations_url": "https://api.github.com/users/Muhammad5Ali/orgs",
  "repos_url": "https://api.github.com/users/Muhammad5Ali/repos",
  "events_url": "https://api.github.com/users/Muhammad5Ali/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Muhammad5Ali/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 7,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-03-30T01:18:31Z",
  "updated_at": "2025-02-27T13:54:29Z"
}
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
res.send('hiteshdotcom')
})
app.get('/tweet',(req,res)=>{
    res.send('hit')
    })
app.get('/sign-in',(req,res)=>{
 res.send('<h1>You are logged-In </h1>')
})
app.get('/github',(req,res)=>{
  res.json(gitdata)
})
app.get('/login',(req,res)=>{
  res.send('welcome')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})