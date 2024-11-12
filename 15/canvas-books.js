const canvas = document.querySelector('#my-canvas');
const ctx = canvas.getContext('2d');

const images = [
            'images/book1.png',
            'images/book2.png',
            'images/book3.png',
            'images/book4.png',
            'images/book5.png'
        ]; 
        
const books = [];
const numBooks = images.length;;

function createBook(imgSrc) {
    const img = new Image();
    img.src = imgSrc;

    return {
        img: img,
        x: Math.random() * (canvas.width - 50),
        y: Math.random() * (canvas.height - 80),
        width: 90,
        height: 120,
        dx: (Math.random() - 0.5) * 4,
        dy: (Math.random() - 0.5) * 4,
    };
}

        images.forEach(src => {
            books.push(createBook(src));
        });

        function drawBooks() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            books.forEach(book => {
                // ctx.fillStyle = book.color;
                // ctx.fillRect(book.x, book.y, book.width, book.height);
                if (book.img.complete) {
                    ctx.drawImage(book.img, book.x, book.y, book.width, book.height);
                }
            });
        }

        function updateBooks() {
            books.forEach(book => {
                if (book.x + book.width > canvas.width || book.x < 0) {
                    book.dx = -book.dx;
                }
                if (book.y + book.height > canvas.height || book.y < 0) {
                    book.dy = -book.dy;
                }

                book.x += book.dx;
                book.y += book.dy;
            });
        }

        function animate() {
            drawBooks();
            updateBooks();
            requestAnimationFrame(animate);
        }

        window.onload = () => {
            animate();
        };