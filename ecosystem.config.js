module.exports = {
  apps : [{
    name: 'server',
    cwd: './pipe-dream-server/',
    script: 'npm',
    args: 'start',

    // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
    instances: 1,
    autorestart: true,
    watch: false,
    max_restarts: 3,
    max_memory_restart: '150M',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  },
  {
    name: 'client',
    cwd: './pipe-dream-client/',
    script: 'npm',
    args: 'start',

    instances: 1,
    autorestart: true,
    watch: true,
    ignore_watch: ['public', 'node_modules', 'shunter.pid'],
    max_restarts: 3,
    max_memory_restart: '150M',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }
]
};
