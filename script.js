const cursor = document.getElementById("cursor");
const mainbody = document.getElementById("main-body");

{
    // Custom Cursor
    mainbody.addEventListener("mousemove", function (details) {
        cursor.animate(
            {
                left: `${x}px`,
                top: `${y}px`,
            },
            { duration: 100, fill: "forwards" }
        );
    });
}