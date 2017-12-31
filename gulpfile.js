const gulp=require('gulp');
const sass=require('gulp-sass');
const autoprefixer=require('gulp-autoprefixer');


    gulp.task('sass',
    ()=>
        gulp.src('./scss/*.scss')
        .pipe(sass(
            {
                outputStyle:'expended',
                sourceComments:true
            }))
        .pipe(autoprefixer(
            {
                versions:['last 2 browsers']
            }
            ))    
        .pipe(gulp.dest('./css'))
    );

    gulp.task('default',()=>
    {
        gulp.watch('./scss/*.scss',['sass'])
    })