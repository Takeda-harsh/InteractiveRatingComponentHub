let userRating = document.querySelectorAll('#rating span');
let ratingMsg = document.querySelector('#finalrtn');
const submitBtn = document.querySelector('#submit-button');
const ratingContainer = document.querySelector('#rating-container');
const rated = document.querySelector('#rated');
const main = document.querySelector('#main-content');

userRating.forEach(function(span) {
    span.addEventListener('click', function() {
        userRating.forEach(function(span) {
            span.classList.remove('selected');
        });
        this.classList.add('selected');

        finalRating = this.innerHTML;
    })
})

submitBtn.addEventListener('click', function() {
    ratingMsg.innerHTML = `You selected ${finalRating} out of 5`;
    ratingContainer.style.display = 'none';
    rated.style.display = 'flex';
    main.innerHTML = rated.innerHTML;
})
