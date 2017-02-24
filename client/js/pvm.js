var button = document.getElementById('start-game')

button.addEventListener('click', function(e) {
    var playerClass = input[0].value;

    if (playerClass === '') {
        alert('Please Pick a Character');
        preventDefault();
    }


    main.innerHTML = '';
    main.className = '';

    // Eval turns a string into a variable name;
    var player = eval(playerClass);

    main.className = 'background-arena';
    var createHeader = document.createElement('header');
    main.appendChild(createHeader);

    if (pickMap === 1) {
        main.className = 'background-arena1';
    }
    if (pickMap === 3) {
        main.className = 'background-arena3';
    }

    var header = document.getElementsByTagName('header')[0];
    var createPlayerStatus = document.createElement('div');
    createPlayerStatus.setAttribute('class', 'player-status');
    header.appendChild(createPlayerStatus);

    var createMonsterStatus = document.createElement('div');
    createMonsterStatus.setAttribute('class', 'monster-status');
    header.appendChild(createMonsterStatus);


    // SET the Player Class to be dinamic!!
    var playerStatus = document.getElementsByClassName('player-status')[0];
    var createParagraph1 = document.createElement('p');
    createParagraph1.setAttribute('id', 'class-name');
    var newPlayerClass = playerClass.replace(/[a-z]/, function(x) {
        return x.toUpperCase()
    });
    var createParagraph1Text = document.createTextNode(newPlayerClass);
    playerStatus.appendChild(createParagraph1);
    createParagraph1.appendChild(createParagraph1Text);


    // SET the Player Health Progress Bar to be dinamic!!
    var createProgress = document.createElement('progress');
    createProgress.setAttribute('value', player.health);
    createProgress.setAttribute('max', player.health);
    createProgress.setAttribute('id', 'player-health-bar');
    playerStatus.appendChild(createProgress);


    // SET the Player Health Bar Info to be dinamic!!
    var createHealthStatus = document.createElement('p');
    createHealthStatus.setAttribute('id', 'player-health-status');
    var createHealthStatusText = document.createTextNode(player.health + ' / ' + player.health)
    playerStatus.appendChild(createHealthStatus);
    createHealthStatus.appendChild(createHealthStatusText);



    // SET the Monster Name
    var monsterStatus = document.getElementsByClassName('monster-status')[0];
    var createParagraph2 = document.createElement('p');
    createParagraph2.setAttribute('id', 'class-name');
    var createParagraph1Text = document.createTextNode('Hulk')
    monsterStatus.appendChild(createParagraph2);
    createParagraph2.appendChild(createParagraph1Text);


    // SET the Monster Health Progress Bar to be dinamic!!
    createProgress = document.createElement('progress');
    createProgress.setAttribute('value', monster.health);
    createProgress.setAttribute('max', monster.health);
    createProgress.setAttribute('id', 'monster-health-bar');
    monsterStatus.appendChild(createProgress);


    // SET the Player Health Bar Info to be dinamic!!
    createHealthStatus = document.createElement('p');
    createHealthStatus.setAttribute('id', 'monster-health-status');
    createHealthStatusText = document.createTextNode(monster.health + ' / ' + monster.health)
    monsterStatus.appendChild(createHealthStatus);
    createHealthStatus.appendChild(createHealthStatusText);

    var createPlayerAvatar = document.createElement('div');
    createPlayerAvatar.setAttribute('class', 'player-avatar');
    main.appendChild(createPlayerAvatar);

    // SET the avatar to be the same with the user input!!
    var playerAvatar = document.getElementsByClassName('player-avatar')[0];
    playerAvatar.innerHTML = "<img src='img/" + playerClass + ".png' alt='" + playerClass + " avatar' />";

    var createMonsterAvatar = document.createElement('div');
    createMonsterAvatar.setAttribute('class', 'monster-avatar');
    main.appendChild(createMonsterAvatar);

    var monsterAvatar = document.getElementsByClassName('monster-avatar')[0];
    monsterAvatar.innerHTML = "<img src='img/monster1.png' alt='Hulk avatar' />";

    // Create Game Button for the player

    var createGameButton = document.createElement('button');
    createGameButton.setAttribute('class', 'game-button');
    createGameButton.setAttribute('id', 'player-attack');
    main.appendChild(createGameButton);

    createGameButton = document.createElement('button');
    createGameButton.setAttribute('class', 'game-button');
    createGameButton.setAttribute('id', 'player-defend');
    main.appendChild(createGameButton);

    createGameButton = document.createElement('button');
    createGameButton.setAttribute('class', 'game-button');
    createGameButton.setAttribute('id', 'player-special-attack');
    main.appendChild(createGameButton);

    var gameButton = document.getElementsByClassName('game-button');
    var playerAttack = document.getElementById('player-attack');
    var playerDefend = document.getElementById('player-defend');
    var playerSpecialAttack = document.getElementById('player-special-attack');

    playerAttack.innerHTML = "<img src='img/attack2-new.png' alt='Attack Icon' />";
    playerDefend.innerHTML = "<img src='img/defend1-new.png' alt='Defend Icon' />";
    playerSpecialAttack.innerHTML = "<img src='img/special-attack1-new.png' alt='Special Attack Icon' />";


    // Create an action text for player and monster
    var createPlayerTextBox = document.createElement('div');
    createPlayerTextBox.setAttribute('class', 'player-text-box');
    main.appendChild(createPlayerTextBox);

    var createMonsterTextBox = document.createElement('div');
    createMonsterTextBox.setAttribute('class', 'monster-text-box');
    main.appendChild(createMonsterTextBox);

    var playerTextBox = document.getElementsByClassName('player-text-box')[0];
    var monsterTextBox = document.getElementsByClassName('monster-text-box')[0];

    var createHeading2 = document.createElement('h2');
    createHeading2.setAttribute('id', 'player-button-text');
    playerTextBox.appendChild(createHeading2);


    createHeading2 = document.createElement('h2');
    createHeading2.setAttribute('id', 'monster-button-text');
    monsterTextBox.appendChild(createHeading2);

    var createParagraph3 = document.createElement('p');
    createParagraph3.setAttribute('id', 'player-text-status');
    playerTextBox.appendChild(createParagraph3);

    createParagraph3 = document.createElement('p');
    createParagraph3.setAttribute('id', 'monster-text-status');
    monsterTextBox.appendChild(createParagraph3);

    var createMonsterHitDamageBox = document.createElement('div');
    createMonsterHitDamageBox.setAttribute('id', 'monster-hit-damage-box');
    main.appendChild(createMonsterHitDamageBox);

    var createPlayerHitDamageBox = document.createElement('div');
    createPlayerHitDamageBox.setAttribute('id', 'player-hit-damage-box');
    main.appendChild(createPlayerHitDamageBox);

    var playerDamageBox = document.getElementById('player-hit-damage-box');
    var monsterDamageBox = document.getElementById('monster-hit-damage-box');

    var createHitDamageParagraph = document.createElement('p');
    createHitDamageParagraph.setAttribute('class', 'hit-damage');
    playerDamageBox.appendChild(createHitDamageParagraph);

    createHitDamageParagraph = document.createElement('p');
    createHitDamageParagraph.setAttribute('class', 'hit-damage');
    monsterDamageBox.appendChild(createHitDamageParagraph);

    // Create Sound Effects and Song
    var createPvmSong = document.createElement('audio');
    createPvmSong.setAttribute('id', 'pvm-song');
    createPvmSong.setAttribute('src', 'audio/pvm_song.mp3');
    createPvmSong.setAttribute('autoplay', 'true');
    createPvmSong.setAttribute('loop', 'true');
    main.appendChild(createPvmSong);

    var pvmSong = document.getElementById('pvm-song');
    pvmSong.volume = 0.8;

    var createAttackSound = document.createElement('audio');
    createAttackSound.setAttribute('autoplay', 'true');
    main.appendChild(createAttackSound);

    var createDefendSound = document.createElement('audio');
    createDefendSound.setAttribute('autoplay', 'true');
    main.appendChild(createDefendSound);

    var createSpecialAttackSound = document.createElement('audio');
    createSpecialAttackSound.setAttribute('autoplay', 'true');
    main.appendChild(createSpecialAttackSound);

    var createHitSound = document.createElement('audio');
    createHitSound.setAttribute('autoplay', 'true');
    main.appendChild(createHitSound);

    var createCounterSound = document.createElement('audio');
    createCounterSound.setAttribute('autoplay', 'true');
    main.appendChild(createCounterSound);

    var createFinishHimSound = document.createElement('audio');
    createFinishHimSound.setAttribute('autoplay', 'true');
    main.appendChild(createFinishHimSound);


    // Create Game Logic

    // Get the text from both h2 and p
    var playerButtonText = document.getElementById('player-button-text');
    var monsterButtonText = document.getElementById('monster-button-text');

    var playerTextStatus = document.getElementById('player-text-status');
    var monsterTextStatus = document.getElementById('monster-text-status');

    var playerHealthProgress = document.getElementsByTagName("progress")[0];
    var playerHealthStatus = document.getElementById('player-health-status');

    var monsterHealthProgress = document.getElementsByTagName("progress")[1];
    var monsterHealthStatus = document.getElementById('monster-health-status');

    var hitDamage = document.getElementsByClassName('hit-damage');

    var createHeading2Text;
    var monsterRandomButton = Math.floor((Math.random() * 3) + 1);
    var monsterButton = [1, 2, 3];

    var currentPlayerHealth = player.health;
    var currentMonsterHealth = monster.health;

    hitDamage[1].innerHTML = '0 dmg!';
    hitDamage[0].innerHTML = '0 dmg!';



    // If the User click attack button then apply these steps!

    playerAttack.addEventListener('click', function(e) {

        // Disable the button after click!
        for (var i = 0; i < gameButton.length; i++) {
            gameButton[i].setAttribute('disabled', 'disabled');
            gameButton[i].style.cursor = 'wait';
            body.style.cursor = 'wait';
        }

        // Create Attack Sound effect
        createAttackSound.setAttribute('src', 'audio/attack_button.mp3');

        // Set Time out function for the Text Action Button for H2 and set visible
        setTimeout(function() {
            createHeading2Text = document.createTextNode('Attack!');
            playerButtonText.appendChild(createHeading2Text);
            playerButtonText.style.visibility = 'visible';
            playerButtonText.style.opacity = '1';
        }, 500);

        // Delete the player and monster status text after click
        monsterTextStatus.innerHTML = '';
        playerTextStatus.innerHTML = '';

        // Set the player and monster status text to be hidden for the CSS transition to take effect!
        playerTextStatus.style.visibility = 'hidden';
        monsterTextStatus.style.visibility = 'hidden';
        playerTextStatus.style.opacity = '0';
        monsterTextStatus.style.opacity = '0';

        // Set Timeout out function for the status text to be visible and for the CSS transition to take effect!
        setTimeout(function() {
            playerTextStatus.style.visibility = 'visible';
            playerTextStatus.style.opacity = '1';
        }, 2300);

        // Different statement logic and text status based on the monster action!
        for (i = 0; i < monsterButton.length; i++) {
            if (monsterRandomButton === monsterButton[i]) {
                if (i === 0) {
                    setTimeout(function() {
                        createHeading2Text = document.createTextNode('Attack!');
                        monsterButtonText.appendChild(createHeading2Text);
                        monsterButtonText.style.visibility = 'visible';
                        monsterButtonText.style.opacity = '1';

                        setTimeout(function() {
                            monsterTextStatus.style.visibility = 'visible';
                            monsterTextStatus.style.opacity = '1';

                            hitDamage[0].style.visibility = 'visible';
                            hitDamage[0].style.opacity = '1';
                            hitDamage[0].style.bottom = '30px';

                            hitDamage[1].style.visibility = 'visible';
                            hitDamage[1].style.opacity = '1';
                            hitDamage[1].style.bottom = '30px';

                            hitDamage[1].innerHTML = monster.attack + ' dmg!';
                            hitDamage[0].innerHTML = player.attack + ' dmg!';

                            playerHealthProgress.setAttribute('value', currentPlayerHealth);
                            playerHealthStatus.innerHTML = player.health + ' / ' + currentPlayerHealth;

                            monsterHealthProgress.setAttribute('value', currentMonsterHealth);
                            monsterHealthStatus.innerHTML = monster.health + ' / ' + currentMonsterHealth;

                            createHitSound.setAttribute('src', 'audio/punch.mp3');

                            if (monsterHealthProgress.getAttribute('value') < 400) {
                                createFinishHimSound.setAttribute('src', 'audio/alert.mp3');
                            }
                            if (playerHealthProgress.getAttribute('value') < 400) {
                                createFinishHimSound.setAttribute('src', 'audio/alert.mp3');
                            }

                        }, 1800);

                        setTimeout(function() {
                            createHitSound.setAttribute('src', 'audio/punch.mp3');
                        }, 2050);

                        currentPlayerHealth -= monster.attack
                        currentMonsterHealth -= player.attack;

                        playerTextStatus.innerHTML = "<img src='img/attack2-new.png' width='45px' alt='Attack Icon' />: " +
                            player.attack + " <br /> You received " + monster.attack + " attack damage from Hulk!";
                        monsterTextStatus.innerHTML = "<img src='img/attack2-new.png' width='45px' alt='Attack Icon' />: " +
                            monster.attack + " <br /> The Hulk received " + player.attack + " attack damage from the " + newPlayerClass + '!';

                    }, 500);
                }
                if (i === 1) {
                    setTimeout(function() {
                        createHeading2Text = document.createTextNode('Defend!');
                        monsterButtonText.appendChild(createHeading2Text);
                        monsterButtonText.style.visibility = 'visible';
                        monsterButtonText.style.opacity = '1';

                        setTimeout(function() {
                            monsterTextStatus.style.visibility = 'visible';
                            monsterTextStatus.style.opacity = '1';

                            hitDamage[0].style.visibility = 'visible';
                            hitDamage[0].style.opacity = '1';
                            hitDamage[0].style.bottom = '30px';

                            hitDamage[1].style.visibility = 'visible';
                            hitDamage[1].style.opacity = '1';
                            hitDamage[1].style.bottom = '30px';

                            createHitSound.setAttribute('src', 'audio/punch.mp3');

                            hitDamage[0].innerHTML = (player.attack - monster.defend) + ' dmg!';

                            monsterHealthProgress.setAttribute('value', currentMonsterHealth);
                            monsterHealthStatus.innerHTML = monster.health + ' / ' + currentMonsterHealth;

                            if (monsterHealthProgress.getAttribute('value') < 400) {
                                createFinishHimSound.setAttribute('src', 'audio/alert.mp3');
                            }
                            if (playerHealthProgress.getAttribute('value') < 400) {
                                createFinishHimSound.setAttribute('src', 'audio/alert.mp3');
                            }

                        }, 1800);

                        currentMonsterHealth -= (player.attack - monster.defend);

                        playerTextStatus.innerHTML = "<img src='img/attack2-new.png' width='45px' alt='Attack Icon' />: " +
                            player.attack;
                        monsterTextStatus.innerHTML = 'Blocked ' + monster.defend + ' damage, <br /> Received ' +
                            (player.attack - monster.defend) + ' damage!';
                    }, 500);
                }
                if (i === 2) {
                    setTimeout(function() {
                        createHeading2Text = document.createTextNode('Special Attack!');
                        monsterButtonText.appendChild(createHeading2Text);
                        monsterButtonText.style.visibility = 'visible';
                        monsterButtonText.style.opacity = '1';

                        setTimeout(function() {
                            monsterTextStatus.style.visibility = 'visible';
                            monsterTextStatus.style.opacity = '1';

                            hitDamage[0].style.visibility = 'visible';
                            hitDamage[0].style.opacity = '1';
                            hitDamage[0].style.bottom = '30px';

                            hitDamage[1].style.visibility = 'visible';
                            hitDamage[1].style.opacity = '1';
                            hitDamage[1].style.bottom = '30px';

                            hitDamage[1].innerHTML = monster.specialAttack + ' dmg!';
                            hitDamage[0].innerHTML = player.attack + ' dmg!';

                            createHitSound.setAttribute('src', 'audio/punch.mp3');

                            playerHealthProgress.setAttribute('value', currentPlayerHealth);
                            playerHealthStatus.innerHTML = player.health + ' / ' + currentPlayerHealth;

                            monsterHealthProgress.setAttribute('value', currentMonsterHealth);
                            monsterHealthStatus.innerHTML = monster.health + ' / ' + currentMonsterHealth;

                            if (monsterHealthProgress.getAttribute('value') < 400) {
                                createFinishHimSound.setAttribute('src', 'audio/alert.mp3');
                            }
                            if (playerHealthProgress.getAttribute('value') < 400) {
                                createFinishHimSound.setAttribute('src', 'audio/alert.mp3');
                            }

                        }, 1800);

                        setTimeout(function() {
                            createHitSound.setAttribute('src', 'audio/punch.mp3');
                        }, 2050);

                        currentPlayerHealth -= monster.specialAttack
                        currentMonsterHealth -= player.attack;



                        playerTextStatus.innerHTML = "<img src='img/attack2-new.png' width='45px' alt='Attack Icon' />: " +
                            player.attack + " <br /> You received " + monster.specialAttack + " attack damage from the Hulk!";
                        monsterTextStatus.innerHTML = "<img src='img/special-attack1-new.png' width='45px' alt='Special Attack Icon' />: " +
                            monster.specialAttack + " <br /> The Hulk received " + player.attack + " attack damage from the " + newPlayerClass + "!";
                    }, 500);
                }
            }
        }
        setTimeout(function() {
            playerButtonText.style.visibility = 'hidden';
            monsterButtonText.style.visibility = 'hidden';
            playerButtonText.style.opacity = '0';
            monsterButtonText.style.opacity = '0';
        }, 1500);

        setTimeout(function() {
            monsterButtonText.innerHTML = '';
            playerButtonText.innerHTML = '';

            for (var i = 0; i < gameButton.length; i++) {
                gameButton[i].removeAttribute('disabled');
                gameButton[i].style.cursor = 'pointer';
                body.style.cursor = 'default';
            }
        }, 2500);

        setTimeout(function() {
            hitDamage[0].style.visibility = 'hidden';
            hitDamage[0].style.opacity = '0';

            hitDamage[1].style.visibility = 'hidden';
            hitDamage[1].style.opacity = '0';
        }, 3500);

        setTimeout(function() {
            hitDamage[0].style.bottom = '5px';
            hitDamage[1].style.bottom = '5px';

            hitDamage[0].innerHTML = '';
            hitDamage[1].innerHTML = '';
        }, 4000);


        // Reset Damage & Monster Random Button
        warrior.attack = Math.floor((Math.random() * 101) + 300);
        warrior.defend = Math.floor((Math.random() * 51) + 50);
        warrior.specialAttack = Math.floor((Math.random() * 301) + 450);

        assassin.attack = Math.floor((Math.random() * 301) + 400);
        assassin.defend = Math.floor((Math.random() * 26) + 25);
        assassin.specialAttack = Math.floor((Math.random() * 401) + 800);

        monster.attack = Math.floor((Math.random() * 201) + 200);
        monster.specialAttack = Math.floor((Math.random() * 201) + 400);
        monsterRandomButton = Math.floor((Math.random() * 3) + 1);

    });




    // If the User click defend button then apply these steps!

    playerDefend.addEventListener('click', function(e) {
        // Disable the button after click!
        for (var i = 0; i < gameButton.length; i++) {
            gameButton[i].setAttribute('disabled', 'disabled');
            gameButton[i].style.cursor = 'wait';
            body.style.cursor = 'wait';
        }

        // Create Defend Sound effect
        createDefendSound.setAttribute('src', 'audio/defend_button.mp3');

        // Set Time out function for the Text Action Button for H2 and set visible
        setTimeout(function() {
            createHeading2Text = document.createTextNode('Defend!');
            playerButtonText.appendChild(createHeading2Text);
            playerButtonText.style.visibility = 'visible';
            playerButtonText.style.opacity = '1';
        }, 500);

        // Delete the player and monster status text after click
        monsterTextStatus.innerHTML = '';
        playerTextStatus.innerHTML = '';

        // Set the player and monster status text to be hidden for the CSS transition to take effect!
        playerTextStatus.style.visibility = 'hidden';
        monsterTextStatus.style.visibility = 'hidden';
        playerTextStatus.style.opacity = '0';
        monsterTextStatus.style.opacity = '0';

        // Set Timeout out function for the status text to be visible and for the CSS transition to take effect!
        setTimeout(function() {
            playerTextStatus.style.visibility = 'visible';
            playerTextStatus.style.opacity = '1';
        }, 2300);

        // Different statement logic and text status based on the monster action!

        for (i = 0; i < monsterButton.length; i++) {
            if (monsterRandomButton === monsterButton[i]) {
                if (i === 0) {
                    setTimeout(function() {
                        createHeading2Text = document.createTextNode('Attack!');
                        monsterButtonText.appendChild(createHeading2Text);
                        monsterButtonText.style.visibility = 'visible';
                        monsterButtonText.style.opacity = '1';

                        setTimeout(function() {
                            monsterTextStatus.style.visibility = 'visible';
                            monsterTextStatus.style.opacity = '1';

                            hitDamage[1].style.visibility = 'visible';
                            hitDamage[1].style.opacity = '1';
                            hitDamage[1].style.bottom = '30px';

                            hitDamage[1].innerHTML = (monster.attack - player.defend) + ' dmg!';

                            createHitSound.setAttribute('src', 'audio/punch.mp3');

                            playerHealthProgress.setAttribute('value', currentPlayerHealth);
                            playerHealthStatus.innerHTML = player.health + ' / ' + currentPlayerHealth;

                            if (monsterHealthProgress.getAttribute('value') < 400) {
                                createFinishHimSound.setAttribute('src', 'audio/alert.mp3');
                            }
                            if (playerHealthProgress.getAttribute('value') < 400) {
                                createFinishHimSound.setAttribute('src', 'audio/alert.mp3');
                            }

                        }, 1800);

                        currentPlayerHealth -= (monster.attack - player.defend);

                        playerTextStatus.innerHTML = 'Blocked ' + player.defend + ' damage, <br /> Received ' +
                            (monster.attack - player.defend) + ' damage!';
                        monsterTextStatus.innerHTML = "<img src='img/attack2-new.png' width='45px' alt='Attack Icon' />: " + monster.attack;


                    }, 500);
                }
                if (i === 1) {
                    setTimeout(function() {
                        createHeading2Text = document.createTextNode('Defend!');
                        monsterButtonText.appendChild(createHeading2Text);
                        monsterButtonText.style.visibility = 'visible';
                        monsterButtonText.style.opacity = '1';

                        playerTextStatus.innerHTML = "You both are defending!";
                        // monsterTextStatus.innerHTML = "The " + playerClass + " is defending also "

                        if (monsterHealthProgress.getAttribute('value') < 400) {
                            createFinishHimSound.setAttribute('src', 'audio/alert.mp3');
                        }
                        if (playerHealthProgress.getAttribute('value') < 400) {
                            createFinishHimSound.setAttribute('src', 'audio/alert.mp3');
                        }

                    }, 500);
                }
                if (i === 2) {
                    setTimeout(function() {
                        createHeading2Text = document.createTextNode('Special Attack!');
                        monsterButtonText.appendChild(createHeading2Text);
                        monsterButtonText.style.visibility = 'visible';
                        monsterButtonText.style.opacity = '1';

                        setTimeout(function() {
                            monsterTextStatus.style.visibility = 'visible';
                            monsterTextStatus.style.opacity = '1';

                            hitDamage[0].style.visibility = 'visible';
                            hitDamage[0].style.opacity = '1';
                            hitDamage[0].style.bottom = '30px';

                            hitDamage[0].innerHTML = player.specialAttack + ' dmg!';

                            createHitSound.setAttribute('src', 'audio/punch.mp3');
                            createCounterSound.setAttribute('src', 'audio/headshot.mp3');

                            monsterHealthProgress.setAttribute('value', currentMonsterHealth);
                            monsterHealthStatus.innerHTML = monster.health + ' / ' + currentMonsterHealth;

                            if (monsterHealthProgress.getAttribute('value') < 400) {
                                createFinishHimSound.setAttribute('src', 'audio/alert.mp3');
                            }
                            if (playerHealthProgress.getAttribute('value') < 400) {
                                createFinishHimSound.setAttribute('src', 'audio/alert.mp3');
                            }

                        }, 1800);

                        currentMonsterHealth -= player.specialAttack;

                        playerTextStatus.innerHTML = "<img src='img/special-attack1-new.png' width='45px' alt='Special Attack Icon' />: " +
                            player.specialAttack + " <br /> Nice! you countered the Hulk special attack!";
                        monsterTextStatus.innerHTML = "Received " + player.specialAttack + " counter damage from the " +
                            playerClass + "!";
                    }, 500);
                }
            }
        }
        setTimeout(function() {
            playerButtonText.style.visibility = 'hidden';
            monsterButtonText.style.visibility = 'hidden';
            playerButtonText.style.opacity = '0';
            monsterButtonText.style.opacity = '0';
        }, 1500);

        setTimeout(function() {
            monsterButtonText.innerHTML = '';
            playerButtonText.innerHTML = '';

            for (var i = 0; i < gameButton.length; i++) {
                gameButton[i].removeAttribute('disabled');
                gameButton[i].style.cursor = 'pointer';
                body.style.cursor = 'default';
            }
        }, 2500);

        setTimeout(function() {
            hitDamage[0].style.visibility = 'hidden';
            hitDamage[0].style.opacity = '0';

            hitDamage[1].style.visibility = 'hidden';
            hitDamage[1].style.opacity = '0';
        }, 3500);

        setTimeout(function() {
            hitDamage[0].style.bottom = '5px';
            hitDamage[1].style.bottom = '5px';

            hitDamage[0].innerHTML = '';
            hitDamage[1].innerHTML = '';
        }, 4000);

        // Reset Damage
        warrior.attack = Math.floor((Math.random() * 101) + 300);
        warrior.defend = Math.floor((Math.random() * 51) + 50);
        warrior.specialAttack = Math.floor((Math.random() * 301) + 450);

        assassin.attack = Math.floor((Math.random() * 301) + 400);
        assassin.defend = Math.floor((Math.random() * 26) + 25);
        assassin.specialAttack = Math.floor((Math.random() * 401) + 800);

        monster.attack = Math.floor((Math.random() * 201) + 200);
        monster.specialAttack = Math.floor((Math.random() * 201) + 400);
        monsterRandomButton = Math.floor((Math.random() * 3) + 1);

    });


    // If the User click special attack button then apply these steps!

    playerSpecialAttack.addEventListener('click', function(e) {
        // Disable the button after click!
        for (var i = 0; i < gameButton.length; i++) {
            gameButton[i].setAttribute('disabled', 'disabled');
            gameButton[i].style.cursor = 'wait';
            body.style.cursor = 'wait';
        }

        // Create Special Attack Sound effect
        createSpecialAttackSound.setAttribute('src', 'audio/special_attack_button.mp3');

        // Set Time out function for the Text Action Button for H2 and set visible
        setTimeout(function() {
            createHeading2Text = document.createTextNode('Special Attack!');
            playerButtonText.appendChild(createHeading2Text);
            playerButtonText.style.visibility = 'visible';
            playerButtonText.style.opacity = '1';
        }, 500);

        // Delete the player and monster status text after click
        monsterTextStatus.innerHTML = '';
        playerTextStatus.innerHTML = '';

        // Set the player and monster status text to be hidden for the CSS transition to take effect!
        playerTextStatus.style.visibility = 'hidden';
        monsterTextStatus.style.visibility = 'hidden';
        playerTextStatus.style.opacity = '0';
        monsterTextStatus.style.opacity = '0';

        // Set Timeout out function for the status text to be visible and for the CSS transition to take effect!
        setTimeout(function() {
            playerTextStatus.style.visibility = 'visible';
            playerTextStatus.style.opacity = '1';
        }, 2300);

        // Different statement logic and text status based on the monster action!
        for (i = 0; i < monsterButton.length; i++) {
            if (monsterRandomButton === monsterButton[i]) {
                if (i === 0) {
                    setTimeout(function() {
                        createHeading2Text = document.createTextNode('Attack!');
                        monsterButtonText.appendChild(createHeading2Text);
                        monsterButtonText.style.visibility = 'visible';
                        monsterButtonText.style.opacity = '1';

                        setTimeout(function() {
                            monsterTextStatus.style.visibility = 'visible';
                            monsterTextStatus.style.opacity = '1';

                            hitDamage[0].style.visibility = 'visible';
                            hitDamage[0].style.opacity = '1';
                            hitDamage[0].style.bottom = '30px';

                            hitDamage[1].style.visibility = 'visible';
                            hitDamage[1].style.opacity = '1';
                            hitDamage[1].style.bottom = '30px';

                            hitDamage[1].innerHTML = monster.attack + ' dmg!';
                            hitDamage[0].innerHTML = player.specialAttack + ' dmg!';

                            createHitSound.setAttribute('src', 'audio/punch.mp3');

                            playerHealthProgress.setAttribute('value', currentPlayerHealth);
                            playerHealthStatus.innerHTML = player.health + ' / ' + currentPlayerHealth;

                            monsterHealthProgress.setAttribute('value', currentMonsterHealth);
                            monsterHealthStatus.innerHTML = monster.health + ' / ' + currentMonsterHealth;

                            if (monsterHealthProgress.getAttribute('value') < 400) {
                                createFinishHimSound.setAttribute('src', 'audio/alert.mp3');
                            }
                            if (playerHealthProgress.getAttribute('value') < 400) {
                                createFinishHimSound.setAttribute('src', 'audio/alert.mp3');
                            }
                        }, 1800);

                        setTimeout(function() {
                            createHitSound.setAttribute('src', 'audio/punch.mp3');
                        }, 2050);

                        currentPlayerHealth -= monster.attack;
                        currentMonsterHealth -= player.specialAttack;

                        playerTextStatus.innerHTML = "<img src='img/special-attack1-new.png' width='45px' alt='Attack Icon' />: " +
                            player.specialAttack + " <br /> You received " + monster.attack + " attack damage from Hulk!";
                        monsterTextStatus.innerHTML = "<img src='img/attack2-new.png' width='45px' alt='Attack Icon' />: " +
                            monster.attack + " <br /> The Hulk received " + player.specialAttack + " special attack damage from the " + newPlayerClass + '!';

                    }, 500);
                }
                if (i === 1) {
                    setTimeout(function() {
                        createHeading2Text = document.createTextNode('Defend!');
                        monsterButtonText.appendChild(createHeading2Text);
                        monsterButtonText.style.visibility = 'visible';
                        monsterButtonText.style.opacity = '1';

                        setTimeout(function() {
                            monsterTextStatus.style.visibility = 'visible';
                            monsterTextStatus.style.opacity = '1';

                            hitDamage[1].style.visibility = 'visible';
                            hitDamage[1].style.opacity = '1';
                            hitDamage[1].style.bottom = '30px';

                            hitDamage[1].innerHTML = monster.specialAttack + ' dmg!';

                            createHitSound.setAttribute('src', 'audio/punch.mp3');
                            createCounterSound.setAttribute('src', 'audio/headshot.mp3');

                            playerHealthProgress.setAttribute('value', currentPlayerHealth);
                            playerHealthStatus.innerHTML = player.health + ' / ' + currentPlayerHealth;

                            if (monsterHealthProgress.getAttribute('value') < 400) {
                                createFinishHimSound.setAttribute('src', 'audio/alert.mp3');
                            }
                            if (playerHealthProgress.getAttribute('value') < 400) {
                                createFinishHimSound.setAttribute('src', 'audio/alert.mp3');
                            }

                        }, 1800);

                        currentPlayerHealth -= monster.specialAttack;

                        playerTextStatus.innerHTML = "Received " + monster.specialAttack + " counter damage from the Hulk!";
                        monsterTextStatus.innerHTML = "<img src='img/special-attack1-new.png' width='45px' alt='Special Attack Icon' />: " +
                            monster.specialAttack + " <br /> countered the " + playerClass + " special attack!";
                    }, 500);
                }
                if (i === 2) {
                    setTimeout(function() {
                        createHeading2Text = document.createTextNode('Special Attack!');
                        monsterButtonText.appendChild(createHeading2Text);
                        monsterButtonText.style.visibility = 'visible';
                        monsterButtonText.style.opacity = '1';

                        setTimeout(function() {
                            monsterTextStatus.style.visibility = 'visible';
                            monsterTextStatus.style.opacity = '1';

                            hitDamage[0].style.visibility = 'visible';
                            hitDamage[0].style.opacity = '1';
                            hitDamage[0].style.bottom = '30px';

                            hitDamage[1].style.visibility = 'visible';
                            hitDamage[1].style.opacity = '1';
                            hitDamage[1].style.bottom = '30px';

                            hitDamage[1].innerHTML = monster.specialAttack + ' dmg!';
                            hitDamage[0].innerHTML = player.specialAttack + ' dmg!';

                            createHitSound.setAttribute('src', 'audio/punch.mp3');

                            playerHealthProgress.setAttribute('value', currentPlayerHealth);
                            playerHealthStatus.innerHTML = player.health + ' / ' + currentPlayerHealth;

                            monsterHealthProgress.setAttribute('value', currentMonsterHealth);
                            monsterHealthStatus.innerHTML = monster.health + ' / ' + currentMonsterHealth;

                            if (monsterHealthProgress.getAttribute('value') < 400) {
                                createFinishHimSound.setAttribute('src', 'audio/alert.mp3');
                            }
                            if (playerHealthProgress.getAttribute('value') < 400) {
                                createFinishHimSound.setAttribute('src', 'audio/alert.mp3');
                            }

                        }, 1800);

                        setTimeout(function() {
                            createHitSound.setAttribute('src', 'audio/punch.mp3');
                        }, 2050);

                        currentPlayerHealth -= monster.specialAttack
                        currentMonsterHealth -= player.specialAttack;

                        playerTextStatus.innerHTML = "<img src='img/special-attack1-new.png' width='45px' alt='Attack Icon' />: " +
                            player.specialAttack + " <br /> You received " + monster.specialAttack + " attack damage from the Hulk!";
                        monsterTextStatus.innerHTML = "<img src='img/special-attack1-new.png' width='45px' alt='Special Attack Icon' />: " +
                            monster.specialAttack + " <br /> The Hulk received " + player.specialAttack + " attack damage from the " + newPlayerClass + "!";
                    }, 500);
                }
            }
        }
        setTimeout(function() {
            playerButtonText.style.visibility = 'hidden';
            monsterButtonText.style.visibility = 'hidden';
            playerButtonText.style.opacity = '0';
            monsterButtonText.style.opacity = '0';
        }, 1500);

        setTimeout(function() {
            monsterButtonText.innerHTML = '';
            playerButtonText.innerHTML = '';

            for (var i = 0; i < gameButton.length; i++) {
                gameButton[i].removeAttribute('disabled');
                gameButton[i].style.cursor = 'pointer';
                body.style.cursor = 'default';
            }
        }, 2500);

        setTimeout(function() {
            hitDamage[0].style.visibility = 'hidden';
            hitDamage[0].style.opacity = '0';

            hitDamage[1].style.visibility = 'hidden';
            hitDamage[1].style.opacity = '0';
        }, 3500);

        setTimeout(function() {
            hitDamage[0].style.bottom = '5px';
            hitDamage[1].style.bottom = '5px';

            hitDamage[0].innerHTML = '';
            hitDamage[1].innerHTML = '';
        }, 4000);

        // Reset Damage
        warrior.attack = Math.floor((Math.random() * 101) + 300);
        warrior.defend = Math.floor((Math.random() * 51) + 50);
        warrior.specialAttack = Math.floor((Math.random() * 301) + 450);

        assassin.attack = Math.floor((Math.random() * 301) + 400);
        assassin.defend = Math.floor((Math.random() * 26) + 25);
        assassin.specialAttack = Math.floor((Math.random() * 401) + 800);

        monster.attack = Math.floor((Math.random() * 201) + 200);
        monster.specialAttack = Math.floor((Math.random() * 201) + 400);
        monsterRandomButton = Math.floor((Math.random() * 3) + 1);
    });

    var checkHealthPoint = setInterval(function() {
        if (playerHealthProgress.getAttribute('value') < 0) {

            main.innerHTML = ''
            main.className = 'end';

            var createHeading4 = document.createElement('h1');
            createHeading4.innerHTML = 'Too bad.. You Lose';
            main.appendChild(createHeading4);

            var createLoseSong = document.createElement('audio');
            createLoseSong.setAttribute('id', 'lose-song');
            createLoseSong.setAttribute('src', 'audio/lose_song2.mp3');
            createLoseSong.setAttribute('autoplay', 'true');
            createLoseSong.setAttribute('loop', 'true');
            main.appendChild(createLoseSong);

            var createResetButton = document.createElement('button');
            createResetButton.setAttribute('value', 'Play Again!');
            createResetButton.setAttribute('id', 'play-again');
            main.appendChild(createResetButton);

            var resetButton = document.getElementById('play-again');

            resetButton.addEventListener('click', function(e) {
                location.reload();
            });

            clearInterval(checkHealthPoint);
        }
        if (monsterHealthProgress.getAttribute('value') < 0) {

            main.innerHTML = ''
            main.className = 'end';

            var createHeading3 = document.createElement('h1');
            createHeading3.innerHTML = 'Congratulation, You Win!';
            main.appendChild(createHeading3);

            var createWinSong = document.createElement('audio');
            createWinSong.setAttribute('id', 'lose-song');
            createWinSong.setAttribute('src', 'audio/win_song2.mp3');
            createWinSong.setAttribute('autoplay', 'true');
            createWinSong.setAttribute('loop', 'true');
            main.appendChild(createWinSong);

            createResetButton = document.createElement('button');
            createResetButton.setAttribute('value', 'Play Again!');
            createResetButton.setAttribute('id', 'play-again');
            main.appendChild(createResetButton);

            resetButton = document.getElementById('play-again');

            resetButton.addEventListener('click', function(e) {
                location.reload();
            });

            clearInterval(checkHealthPoint);
        }
    }, 1000);

});
