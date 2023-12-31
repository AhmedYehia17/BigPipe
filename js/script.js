function simulateBigPipe() {
    setTimeout(function () {
        document.getElementById('header').innerHTML =
            // '<p>Header Content Loaded</p>'+
            // '<p class="Ahmed">Ahmed Yehia</p>'
            `<a href="#" class="logo">Shendy</a>` +
            `<ul class="links">
            <li>Home</li>
            <li>about</li>
            <li>services</li>
            <li>contact</li>
        `
            ;
    }, 1000);

    setTimeout(function () {
        document.getElementById('content').innerHTML =
            `<div class="content-text">
            <p>Here is the Big Pipe Project</p>
            <a href="#">Get Started</a>
        </div>
        `
            ;
    }, 5000);

    setTimeout(function () {
        document.getElementById('footer').innerHTML =
            `<p>&copy;2024 Shendy. All rights reserved.</p>`
            ;
    }, 3000);
}

simulateBigPipe();
