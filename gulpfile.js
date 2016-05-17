var gulp = require('gulp');
var del = require('gulp-delete-file');
var fs = require('fs');
//libs, css, html, tscopy, deleteFile
var paths = {
    npm: './node_modules/',
    lib: './dist/lib/',
    modules: './dist/lib/',
    app: './dist/apps/',
    angularCore: './dist/lib/@angular/',
    root: './dist/',
    tsscript: './dist/src/',
    script: './src/'
};

var libs = [
    paths.npm + 'es6-shim/es6-shim.min.js',
    paths.npm + 'es6-shim/es6-shim.min.map',
    paths.npm + 'zone.js/dist/zone.js',
    paths.npm + 'reflect-metadata/Reflect.js',
    paths.npm + 'systemjs/dist/system.src.js'
];

gulp.task('angularCore', function () {
    if (fs.existsSync(paths.modules + '@angular')) {
        console.log('file exixt');
        return true;
    } else {
        gulp.src('./node_modules/@angular/**/*.*').pipe(gulp.dest(paths.modules + '@angular'));
        gulp.src('./node_modules/rxjs/**/*.*').pipe(gulp.dest(paths.modules + 'rxjs'));
        gulp.src('./node_modules/angular2-in-memory-web-api/**/*.*').pipe(gulp.dest(paths.modules + 'angular2-in-memory-web-api'));
    }
});

gulp.task('favicon', function () {
    if (fs.existsSync(paths.lib)) {
        console.log('file exixt');
        return true;
    } else {
        return gulp.src(paths.script + 'favicon.ico').pipe(gulp.dest(paths.root));
    }
});

gulp.task('htmlDelete', function () {
    return gulp.src(paths.root + 'apps/**/*.html').pipe(del({
        deleteMatch: true
    }))
});

gulp.task('html', function () {
    return gulp.src(paths.script + 'apps/**/*.html')
        .pipe(gulp.dest(paths.app));
});
gulp.task('index', function () {
    return gulp.src(paths.script + 'index.html')
        .pipe(gulp.dest(paths.root));
});
gulp.task('system', function () {
    return gulp.src(paths.script + 'systemjs.config.js')
        .pipe(gulp.dest(paths.root));
});
// gulp.task('indexCopy', function () {
//     return gulp.src(paths.script + 'index.html')
//         .pipe(gulp.dest(paths.root));
// });

// gulp.task('indexDelete', function () {
//    return gulp.src([paths.app + 'index.html']).pipe(del({
//         deleteMatch: true
//     }))
// });

gulp.task('cssDelete', function () {
    return gulp.src(paths.root + 'apps/**/*.css').pipe(del({
        deleteMatch: true
    }))
});

gulp.task('css', function () {
    return gulp.src(paths.script + 'apps/**/*.css')
        .pipe(gulp.dest(paths.app));
});

gulp.task('libs', function () {
    if (fs.existsSync(paths.lib)) {
        console.log('file exixt');
        return true;
    } else {
        return gulp.src(libs).pipe(gulp.dest(paths.lib));
    }
});

gulp.task('tscopy', function () {
    return gulp.src(paths.script + '**/*[a-z].ts')
        .pipe(gulp.dest(paths.tsscript));
});


gulp.task('default', ['angularCore','favicon','html','index','system', 'css','libs','tscopy']);
//gulp.task('default', ['favicon', 'htmlDelete', 'html', 'index', 'system', 'cssDelete', 'css', 'tscopy']);