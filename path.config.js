const path = require('path');

const Directory = {
    entry: {
        root: 'src',
        static: 'static',
    },
    output: {
        root: 'dist',
        static: 'dist',
        asset: 'assets',
        stats: 'stats',
    },
};

const Path = {
    entry: {
        root: path.resolve(Directory.entry.root),
        static: path.resolve(Directory.entry.static),
    },
    output: {
        root: path.resolve(Directory.output.root),
        static: path.resolve(Directory.output.static),
        asset: path.resolve(Directory.output.root, Directory.output.asset),
        stats: path.resolve(Directory.output.stats),
    },
};

module.exports = {
    Directory,
    Path,
};
