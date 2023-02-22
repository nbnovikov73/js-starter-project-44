module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': "airbnb",
    'overrides': [
    ],
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'rules': {
        "no-console": "off",
        'import/extensions': [
            'error',
            'ignorePackages',
            'always'
        ],
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ]
    }
};
