# moment2
Syftet med automatiseringsprocessen är att förenkla arbetet när du utvecklar ett projekt lokalt och det i sin tur underlättar när du ska publicera till exempelvis ett remote repo. Utan automatiseringen kan du självklart komprimera och konkatenera filer men du måste skriva in "ordern" manuellt och risken finns att du kanske glömmer att slå ihop något eller så. Genom att automatisera alla tasks behöver du bara jobba med det du kan bäst, utveckla, för att sedan spara din fil och allt sker av sig självt. Det sparar tid och man slipper tappa fokus på vad man håller på med.

Till mitt arbete har jag valt följande paket:

* gulp-concat, för att kunna konkatenera js-, css-, och sassfiler.  npm install --save-dev gulp-concat
* gulp-sass, för att kunna komprimera och göra om sassfiler till css.   npm install gulp-sass --save-dev
* gulp-uglifycss, för att kunna komprimera cssfiler.   npm install --save gulp-uglifycss
* gulp-uglify, för att kunna komprimera JavaScript.   npm install --save-dev gulp-uglify
* gulp-imagemin, för att kunna komprimera bilder.   npm install --save-dev gulp-imagemin

Jag har valt dessa för att dem låg högst upp i sökningarna. Jag hade ingen kunskap om dem egentligen.

I mitt "system" börjar man med att öppna git bash, eller någon terminal i "huvudkatalogen" för projektet. I mappen finns nodemodulerna, gulpfile, package-json, en workspace-mapp där jag arbetar och en pub-mapp dit alla komprimerade och konkaternerade filer skickas.
För att köra igång så skriver man in "gulp" i terminalen och då körs default och alla watch-tasks igång. Dem lyssnar efter ändringar i respektive filtyp. Så om jag gör en ändring i en css-fil och sparar, känner en watch-task av det och kör funktionen för att komprimera eller konkatenera och skickar filen till pub-mappen.


gulp.task('run', ['sass', 'css', 'minify', 'copyhtml', 'imageMin']);


gulp.task('watch', function(){
   * gulp.watch('workspace/sass/*.sass', ['sass']);
   * gulp.watch('workspace/css/*.css', ['css']);
   * gulp.watch('workspace/js/*.js', ['minify']);
   * gulp.watch('workspace/*.html', ['copyhtml']);
   * gulp.watch('workspace/images/*', ['imageMin']);
});


gulp.task('default', ['message', 'run', 'watch']);


När arbetet är klart för dagen så går man in i pubmappen och kör git bash där ifrån. Add, commit och push till detta repo.
