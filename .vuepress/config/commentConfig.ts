export const commentConfig = {
  // type: 'valine',
  // options: {
  //   appId: 'RvrM45f9SVD3qeRUSz1Q7rkx-9Nh9j0Va',
  //   appKey: 'gpUrlXJ3ISpcmTOqXBzd01gY',
  //   placeholder: "粘贴图片到此处可以自动上传，填写邮箱可以邮件收到回复哦(●'◡'●)",
  //   requiredFields: ['nick','mail'], // 必要值
  //   // lang:'zh-CN', // 语言
  //   // notify: true, // 邮件提醒
  //   // verify: false, // 验证码服务
  //   // visitor: true, // 阅读量统计
  //   recordIP: true, // 记录评论者IP
  //   enableQQ: true, // 是否开启强制拉取 qq 头像
  //   // hideComments: true, // 隐藏评论
  //   background: '/comment.webp'  // 背景图
  // },
  type: 'giscus',
  options: {
    repo: 'vlssu/vlssu.github.io',
    repoId: 'R_kgDOIDoMyg',
    category: '评论',
    categoryId: 'DIC_kwDOIDoMys4CZemA',
    mapping: 'title',
    lang:'zh-CN',
    inputPosition:'top',
    loading:'lazy',
    // hideComments: true, // 全局隐藏评论，默认 false
  },
}