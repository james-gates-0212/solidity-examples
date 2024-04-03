const emojis = [
  '♻️',
  '⚙️',
  '⚡️',
  '✅',
  '✏️',
  '✨',
  '❤️',
  '⭐️',
  '🌈',
  '🎁',
  '🎉',
  '🏆',
  '🏷️',
  '🐞',
  '👌',
  '💎',
  '💢',
  '💫',
  '💬',
  '💯',
  '💰',
  '💲',
  '📚',
  '📦',
  '🔖',
  '🗨️',
  '🪙',
  '🚀',
  '🚧',
  '🚨',
  '🛠️',
];

const includeEmojis = new RegExp(`[${emojis.join('')}]`, 'g');

const config = {
  extends: ['@commitlint/config-conventional'],
  plugins: [
    {
      rules: {
        'header-match-team-pattern': (parsed) => {
          const { subject } = parsed;
          if (includeEmojis.test(subject) === false) {
            return [false, 'subject should include one of [' + emojis.join(', ') + ']'];
          }
          return [true, ''];
        },
      },
    },
  ],
  /*
   * Any rules defined here will override rules from @commitlint/config-conventional
   */
  rules: {
    'scope-case': [0, 'always', 'lower-case'],
    'subject-case': [0, 'always', 'lower-case'],
    'header-match-team-pattern': [2, 'always'],
    'type-enum': [
      2,
      'always',
      [
        'add',
        'adopt',
        'apply',
        'build',
        'chore',
        'config',
        'delete',
        'docs',
        'feat',
        'fix',
        'init',
        'refactor',
        'remove',
        'style',
        'test',
        'update',
        'upgrade',
      ],
    ],
  },
};

module.exports = config;
