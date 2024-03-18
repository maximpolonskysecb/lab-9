document.addEventListener('DOMContentLoaded', () => {
    $(document).ready(function () {

        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Functions ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        // Show Pics
        function showPics(picsArray) {

            //clear space
            $('#mainSpace').empty();

            //for each photo
            picsArray.forEach(photoName => {

                //new card
                const newCard = $('<div class="card">')

                //set space and photo
                const newSpace = $('<div class="imgSpace">')
                const newImage = $('<img>');
                newImage.attr('src', photoName);
                newSpace.append(newImage);
                newCard.append(newSpace);

                //set title
                const newTitle = $('<p>').text(photoName);
                newCard.append(newTitle);

                //add eventlistener
                newCard.click(function () {
                    fullImage(photoName);
                });

                //append
                $('#mainSpace').append(newCard);

            });
        }

        // Full Image
        function fullImage(photoName) {

            const fullCard = $('#photoFull');

            $('#photoFull img').attr('src', photoName)
            fullCard.css('opacity', 1);
            fullCard.css('visibility', 'visible')

            $('#photoFull p').click(function() {
                fullCard.css('opacity', 0);
                fullCard.css('visibility', 'hidden')    
            })
        }

        // Open Folder
        function openFolder(picsInFolder) {

            showPics(picsInFolder);

            //set transparent card for add
            const newCard = $('<div class="card">')
            newCard.css('background-color', 'transparent');

            //set space and photo
            const newSpace = $('<div class="imgSpace">')
            const newImage = $('<img>');
            newImage.attr('src', 'add.png');
            newImage.css('width', '70%');

            //animation
            newImage.hover(
                function () {
                    $(this).animate({ width: '80%' }, 'fast');
                },
                function () {
                    $(this).animate({ width: '70%' }, 'fast');
                }
            )

            //append space and image
            newSpace.append(newImage);
            newCard.append(newSpace);

            //add eventlistener
            newCard.click(function () {
                showBarToChoose();
            });

            //append
            $('#mainSpace').append(newCard);

        }

        // Add Photos To Folder
        function showBarToChoose() {

        }

        // Show Input
        function showInput() {

        }

        // Set Grid
        function setGrid() {

            //showpics
            showPics(photos);

            //turn on color active
            $('#foldersBtn').removeClass('now')
            $('#gridBtn').addClass('now')

        }

        // Set Folders
        function setFolders() {

            //clear space
            $('#mainSpace').empty();

            //for each folder
            folders.forEach(folderInfo => {

                //new card but transparent
                const newCard = $('<div class="card">')

                //set space and photo
                const newSpace = $('<div class="imgSpace">')
                const newImage = $('<img>');
                newImage.attr('src', 'folder.png');
                newSpace.append(newImage);
                newCard.append(newSpace);

                //set title
                const newTitle = $('<p>').text(folderInfo[0]);
                newCard.append(newTitle);

                //add eventlistener
                newCard.click(function () {
                    openFolder(folderInfo[1])
                });

                //append
                $('#mainSpace').append(newCard);

            });

            //set transparent card for add
            const newCard = $('<div class="card">')
            newCard.css('background-color', 'transparent');

            //set space and photo
            const newSpace = $('<div class="imgSpace">')
            const newImage = $('<img>');
            newImage.attr('src', 'add.png');
            newImage.css('width', '70%');

            //animation
            newImage.hover(
                function () {
                    $(this).animate({ width: '80%' }, 'fast');
                },
                function () {
                    $(this).animate({ width: '70%' }, 'fast');
                }
            )

            //append images and photo
            newSpace.append(newImage);
            newCard.append(newSpace);

            //add eventlistener
            newCard.click(function () {
                showInput();
            });

            //append
            $('#mainSpace').append(newCard);

            //turn on color active
            $('#gridBtn').removeClass('now')
            $('#foldersBtn').addClass('now')

        }

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // AddEventListeners /////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        //Grid
        $('#gridBtn').click(setGrid);

        //Folders
        $('#foldersBtn').click(setFolders)

        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Main Program ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        //Set photos
        let photos = ['img1.webp', 'img2.webp', 'img3.webp', 'img4.webp', 'img5.webp', 'img6.jpeg', 'img6.jpeg']
        let folders = [
            ['folder', ['img1.webp', 'img2.webp']],
            ['dermishe', ['img3.webp']]
        ];

        //Grid by default
        $('#gridBtn').trigger('click');

    });
});