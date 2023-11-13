document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('messageForm');
    var input = document.getElementById('messageInput');
    var chatArea = document.getElementById('chatArea');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Create a new message element
        var message = document.createElement('p');
        message.textContent = input.value;

        // Add the message to the chat area
        chatArea.appendChild(message);

        // Clear the input field
        input.value = '';
    });
});
// Add an event listener to your emoji button
document.getElementById('emojiButton').addEventListener('click', function() {
    // Toggle the visibility of your emoji keyboard
    var emojiKeyboard = document.getElementById('emojiKeyboard');
    emojiKeyboard.style.display = emojiKeyboard.style.display === 'none' ? 'block' : 'none';
});

// Add event listeners to your emojis
var emojis = document.getElementsByClassName('emoji');
for (var i = 0; i < emojis.length; i++) {
    emojis[i].addEventListener('click', function(e) {
        // Add the clicked emoji to your input field
        var input = document.getElementById('messageInput');
        input.value += e.target.alt;
    });
}
