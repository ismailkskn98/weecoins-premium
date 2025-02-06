module.exports = {
    apps : [{
      name   : "WeeCoinsPremium_NextJS",
      script : "npm",
      args   : "run start",
      interpreter : 'node@23.7.0',
      cwd: "/home/wcpremium",
      autorestart: true,
      watch: false
    }]
}