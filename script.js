// 1. Data Sources
const evidenceTypes = [
    "EMF 5", "Ultraviolet", "Ghost Writing",
    "Freezing", "DOTS", "Ghost Orbs", "Spirit Box"
];

const speedTypes = ["Slow", "Normal", "Fast"];

const behaviorTypes = [
    { code: "Male", desc: "Male ghost" }, // not banshee, dayan
    { code: "Mist", desc: "Has mist form" }, // not oni, kormos
    { code: "Salt", desc: "Stepped on salt" }, // not wraith
    { code: "DotsVisible", desc: "DOTS visible in-room" }, // not goryo
    { code: "LightsOn", desc: "Turned on lights/TV" }, // not mare
    { code: "FireOn", desc: "Lit a fire source" }, // not onryo
    { code: "SwitchEMF", desc: "Light flicker EMF 2" }, // not mare
    { code: "BreakerOn", desc: "Turned on breaker" }, // not hantu
    { code: "BreakerOff", desc: "Turned off breaker" }, // not jinn
    { code: "Chase", desc: "Did chase event" }, // not kormos
    { code: "HalfwayDoor", desc: "Half opens door" }, // not yurei
    { code: "GhostPhoto", desc: "Appeared in photo" }, // not phantom
    { code: "ChangeRoom", desc: "Ghost room changed" }, // not goryo
];

// Comprehensive Phasmophobia Ghost Data
const ghostData = [
    {
        name: "Aswang",
        ev1: "Freezing",
        ev2: "Ghost Writing",
        ev3: "DOTS",
        speeds: ["Slow"],
        speedVals: ["1.53"],
        cannotDo: [],
        tells: ["Ends hunt after reaching hiding spot.", "Reaches max LOS speed faster."]
    },
    {
        name: "Banshee",
        ev1: "Ultraviolet",
        ev2: "Ghost Orbs",
        ev3: "DOTS",
        speeds: ["Normal"],
        speedVals: ["1.7"],
        cannotDo: ["Male"],
        tells: ["Chance to scream.", "Chases favorite player during DOTS."]
    },
    {
        name: "Dayan",
        ev1: "EMF 5",
        ev2: "Ghost Orbs",
        ev3: "Spirit Box",
        speeds: ["Slow", "Normal", "Fast"],
        speedVals: ["1.2", "1.7", "2.25"],
        cannotDo: ["Male"],
        tells: ["Slow if nearby player is not moving.", "Fast if moving. Normal if no one's nearby."]
    },
    {
        name: "Deildegast",
        ev1: "EMF 5",
        ev2: "Ghost Writing",
        ev3: "DOTS",
        speeds: ["Slow", "Normal", "Fast"],
        speedVals: ["0.4", "3.0"],
        cannotDo: [],
        tells: ["-0.1 m/s per items misplaced between hunts.", "Resets to max speed between hunts."]
    },
    {
        name: "Demon",
        ev1: "Ultraviolet",
        ev2: "Ghost Writing",
        ev3: "Freezing",
        speeds: ["Normal"],
        speedVals: ["1.7"],
        cannotDo: [],
        tells: ["Hunts 60s after being smudged instead of 90s.", "Hunts 20s after hunt/crucifix burn instead of 25s."]
    },
    {
        name: "Deogen",
        ev1: "Ghost Writing",
        ev2: "Spirit Box",
        ev3: "DOTS",
        speeds: ["Slow", "Fast"],
        speedVals: ["0.4", "3.0"],
        cannotDo: [],
        tells: ["Guaranteed Spirit Box.", "33% chance to breathe on spirit box."]
    },
    {
        name: "Gallu",
        ev1: "EMF 5",
        ev2: "Ultraviolet",
        ev3: "Spirit Box",
        speeds: ["Slow", "Normal", "Fast"],
        speedVals: ["1.36", "1.7", "3.0"],
        cannotDo: [],
        tells: ["Normal > Enraged (item usage) >", "Weakened (after hunt) > Normal (item usage)"]
    },
    {
        name: "Goryo",
        ev1: "EMF 5",
        ev2: "Ultraviolet",
        ev3: "DOTS",
        speeds: ["Normal"],
        speedVals: ["1.7"],
        cannotDo: ["DotsVisible", "ChangeRoom"],
        tells: ["Guaranteed DOTS."]
    },
    {
        name: "Hantu",
        ev1: "Ultraviolet",
        ev2: "Ghost Orbs",
        ev3: "Freezing",
        speeds: ["Slow", "Normal", "Fast"],
        speedVals: ["1.4", "2.7"],
        cannotDo: ["BreakerOn"],
        tells: ["Guaranteed Freezing. Faster in cold, vice versa.", "Visible breath during hunts when breaker is off."]
    },
    {
        name: "Jinn",
        ev1: "EMF 5",
        ev2: "Ultraviolet",
        ev3: "Freezing",
        speeds: ["Normal", "Fast"],
        speedVals: ["1.7", "2.5"],
        cannotDo: ["BreakerOff"],
        tells: ["During hunt, LOS speed is fast when far, then slows back down when near."]
    },
    {
        name: "Kormos",
        ev1: "Ghost Orbs",
        ev2: "Spirit Box",
        ev3: "Ultraviolet",
        speeds: ["Normal", "Fast"],
        speedVals: ["1.7", "2.21"],
        cannotDo: ["Mist", "Chase"],
        tells: ["Can't see but detects moving players in range.", "Crouched 10m; Stood 15m; Sprint 30m."]
    },
    {
        name: "Mare",
        ev1: "Ghost Writing",
        ev2: "Ghost Orbs",
        ev3: "Spirit Box",
        speeds: ["Normal"],
        speedVals: ["1.7"],
        cannotDo: ["LightsOn", "SwitchEMF"],
        tells: ["Can turn off any light a player just turned on.", "Can turn off light a player turned on mid-event."]
    },
    {
        name: "Moroi",
        ev1: "Ghost Writing",
        ev2: "Freezing",
        ev3: "Spirit Box",
        speeds: ["Slow", "Normal", "Fast"],
        speedVals: ["1.5", "2.25"],
        cannotDo: [],
        tells: ["Guaranteed Spirit Box.", "Incense blindness is 7s instead of 5s."]
    },
    {
        name: "Myling",
        ev1: "EMF 5",
        ev2: "Ultraviolet",
        ev3: "Ghost Writing",
        speeds: ["Normal"],
        speedVals: ["1.7"],
        cannotDo: [],
        tells: ["Makes two paranormal sounds in under 80s.", "Can't be heard 12m+ away during hunts."]
    },
    {
        name: "Obake",
        ev1: "EMF 5",
        ev2: "Ultraviolet",
        ev3: "Ghost Orbs",
        speeds: ["Normal"],
        speedVals: ["1.7"],
        cannotDo: [],
        tells: ["Guaranteed Ultraviolet. Changes model mid-hunt.", "Chance to hide UV or show 6 fingerprints."]
    },
    {
        name: "Obambo",
        ev1: "Ghost Writing",
        ev2: "Ultraviolet",
        ev3: "DOTS",
        speeds: ["Slow", "Fast"],
        speedVals: ["1.45", "1.96"],
        cannotDo: [],
        tells: ["Switches to fast and slow every 2 minutes.", "Can change speed mid-hunt unlike The Twins."]
    },
    {
        name: "Oni",
        ev1: "EMF 5",
        ev2: "Freezing",
        ev3: "DOTS",
        speeds: ["Normal"],
        speedVals: ["1.7"],
        cannotDo: ["Mist"],
        tells: ["More visible during hunts/events.", "More active around multiple people."]
    },
    {
        name: "Onryo",
        ev1: "Ghost Orbs",
        ev2: "Freezing",
        ev3: "Spirit Box",
        speeds: ["Normal"],
        speedVals: ["1.7"],
        cannotDo: ["FireOn"],
        tells: ["Hunts at any sanity after extinguishing 3 flames.", "Can extinguish same firelight twice in 20s."]
    },
    {
        name: "Phantom",
        ev1: "Ultraviolet",
        ev2: "Spirit Box",
        ev3: "DOTS",
        speeds: ["Normal"],
        speedVals: ["1.7"],
        cannotDo: ["GhostPhoto"],
        tells: ["Less visible during hunts.", "May leave EMF 2 without interaction."]
    },
    {
        name: "Poltergeist",
        ev1: "Ultraviolet",
        ev2: "Ghost Writing",
        ev3: "Spirit Box",
        speeds: ["Normal"],
        speedVals: ["1.7"],
        cannotDo: [],
        tells: ["Can throw an item in a lit room.", "During hunts, throws items every 0.5s."]
    },
    {
        name: "Raiju",
        ev1: "EMF 5",
        ev2: "Ghost Orbs",
        ev3: "DOTS",
        speeds: ["Normal", "Fast"],
        speedVals: ["1.7", "2.5"],
        cannotDo: [],
        tells: ["Faster when near active electronics."]
    },
    {
        name: "Revenant",
        ev1: "Ghost Writing",
        ev2: "Freezing",
        ev3: "Ghost Orbs",
        speeds: ["Slow", "Fast"],
        speedVals: ["1.0", "3.0"],
        cannotDo: [],
        tells: ["Extremely slow when not chasing.", "Extremely fast when it detects a player."]
    },
    {
        name: "Shade",
        ev1: "EMF 5",
        ev2: "Ghost Writing",
        ev3: "Freezing",
        speeds: ["Normal"],
        speedVals: ["1.7"],
        cannotDo: [],
        tells: ["A shadow ghost when using cursed items.", "Cannot perform singing ghost events."]
    },
    {
        name: "Spirit",
        ev1: "EMF 5",
        ev2: "Ghost Writing",
        ev3: "Spirit Box",
        speeds: ["Normal"],
        speedVals: ["1.7"],
        cannotDo: [],
        tells: ["Waits 180s after being incensed before hunting again instead of 90s."]
    },
    {
        name: "Thaye",
        ev1: "Ghost Writing",
        ev2: "Ghost Orbs",
        ev3: "DOTS",
        speeds: ["Slow", "Normal", "Fast"],
        speedVals: ["1.0", "1.7", "2.75"],
        cannotDo: [],
        tells: ["Ages up. Only ghost that can be 90+ age.", "No LOS speed up."]
    },
    {
        name: "The Mimic",
        ev1: "Ultraviolet",
        ev2: "Freezing",
        ev3: "Spirit Box",
        speeds: ["Slow", "Normal", "Fast"],
        speedVals: ["1.7"],
        cannotDo: [],
        tells: ["Always has Ghost Orbs."]
    },
    {
        name: "The Twins",
        ev1: "EMF 5",
        ev2: "Freezing",
        ev3: "Spirit Box",
        speeds: ["Slow", "Fast"],
        speedVals: ["1.5", "1.9"],
        cannotDo: [],
        tells: ["Speed during hunts is either slow or fast.", "Can do 2 interactions, one close, one mid-range."]
    },
    {
        name: "Wraith",
        ev1: "EMF 5",
        ev2: "Spirit Box",
        ev3: "DOTS",
        speeds: ["Normal"],
        speedVals: ["1.7"],
        cannotDo: ["Salt"],
        tells: ["May show EMF 2 without interaction."]
    },
    {
        name: "Yokai",
        ev1: "Ghost Orbs",
        ev2: "Spirit Box",
        ev3: "DOTS",
        speeds: ["Normal"],
        speedVals: ["1.7"],
        cannotDo: [],
        tells: ["Lingers over a music box before starting a hunt.", "Sensor and crucifix nearby, and hold music box."]
    },
    {
        name: "Yurei",
        ev1: "Freezing",
        ev2: "Ghost Orbs",
        ev3: "DOTS",
        speeds: ["Normal"],
        speedVals: ["1.7"],
        cannotDo: ["HalfwayDoor"],
        tells: ["Closes entrance door outside hunt/event.", "Incensing traps it in its room for 90s."]
    }
];

// 2. Population Functions using document.createElement
function populateSection(containerSelector, items, rowClassName, isBehavior = false) {
    const container = document.querySelector(containerSelector);

    items.forEach(item => {
        const row = document.createElement('div');
        row.className = rowClassName;
        row.dataset.state = '0';

        const label = document.createElement('label');

        const input = document.createElement('input');
        input.type = 'checkbox';
        input.style.display = 'none';

        const box = document.createElement('div');
        box.className = 'custom-box';

        const span = document.createElement('span');

        if (isBehavior) {
            input.dataset.behaviorType = item.code;
            span.textContent = item.desc;
        } else {
            span.textContent = item;
        }

        label.appendChild(input);
        label.appendChild(box);
        label.appendChild(span);
        row.appendChild(label);
        container.appendChild(row);
    });
}

function populateGhostCards() {
    const container = document.querySelector('#ghosts');
    container.innerHTML = '';

    ghostData.forEach(ghost => {
        const card = document.createElement('section');
        card.className = 'ghost-card';

        // Map evidence data attributes
        card.dataset.evidence1 = ghost.ev1;
        card.dataset.evidence2 = ghost.ev2;
        card.dataset.evidence3 = ghost.ev3;

        // Map speed data attributes (slow, normal, fast)
        card.dataset.speedSlow = ghost.speeds.includes("Slow");
        card.dataset.speedNormal = ghost.speeds.includes("Normal");
        card.dataset.speedFast = ghost.speeds.includes("Fast");

        // Map behavior / cannotDo flags (default all behavior keys to false, set true if present in cannotDo)
        behaviorTypes.forEach(b => {
            const attrName = 'data-' + b.code.toLowerCase();
            card.setAttribute(attrName, ghost.cannotDo.includes(b.code));
        });

        // Header containing Name and Close/X Button
        const headerDiv = document.createElement('div');
        headerDiv.className = 'ghost-header';

        const nameH3 = document.createElement('h3');
        nameH3.textContent = ghost.name;
        headerDiv.appendChild(nameH3);

        const closeBtn = document.createElement('button');
        closeBtn.type = 'button';
        closeBtn.className = 'ghost-close-btn';
        closeBtn.textContent = '✕';
        headerDiv.appendChild(closeBtn);
        card.appendChild(headerDiv);

        // Evidences Container
        // 1. Create a lookup map for your icons
        const evidenceIcons = {
            "EMF 5": "fa-solid fa-bolt",
            "Ultraviolet": "fa-solid fa-fingerprint",
            "Ghost Writing": "fa-solid fa-book",
            "Freezing": "fa-solid fa-snowflake",
            "DOTS": "fa-solid fa-project-diagram",
            "Ghost Orbs": "fa-solid fa-circle",
            "Spirit Box": "fa-solid fa-radio"
        };

        const evList = document.createElement('div');
        evList.className = 'ghost-evidences';

        [ghost.ev1, ghost.ev2, ghost.ev3].forEach(ev => {
            const evSpan = document.createElement('span');
            const evCName = ev.toLowerCase().replace(/\s/g, "");
            evSpan.className = 'ev-badge ev-' + evCName;


            // Create and add the FontAwesome icon if it exists in the map
            if (evidenceIcons[ev]) {
                const icon = document.createElement('i');
                icon.className = evidenceIcons[ev];
                evSpan.appendChild(icon);
            }

            // Add a text node or span for the evidence name (with a small space after the icon)
            const textSpan = document.createElement('span');
            textSpan.textContent = " " + ev;
            evSpan.appendChild(textSpan);

            evList.appendChild(evSpan);
        });
        card.appendChild(evList);

        // Footsteps Speed Values Container
        // Keep track of the currently active audio playback loop so we can stop it
        let currentAudioInterval = null;
        let activeSpeakerIcon = null;

        const speedValDiv = document.createElement('div');
        speedValDiv.className = 'ghost-speeds-val';

        // Add a label prefix if desired, or build directly
        const speedLabel = document.createElement('span');
        speedLabel.textContent = 'Speed: ';
        speedValDiv.appendChild(speedLabel);

        ghost.speedVals.forEach((speedNum, index) => {
            // Container for each speed value + speaker pair (if multiple like "1.5, 2.3")
            const speedItemSpan = document.createElement('span');
            speedItemSpan.className = 'speed-item';
            speedItemSpan.style.marginRight = '10px';

            const numSpan = document.createElement('span');
            numSpan.textContent = speedNum;
            speedItemSpan.appendChild(numSpan);

            // Create speaker icon button
            const speakerBtn = document.createElement('button');
            speakerBtn.type = 'button';
            speakerBtn.className = 'fa-solid fa-volume-high speed-speaker-btn';
            speakerBtn.style.background = 'transparent';
            speakerBtn.style.border = 'none';
            speakerBtn.style.cursor = 'pointer';
            speakerBtn.style.marginLeft = '4px';
            speakerBtn.style.color = '#aaa';

            // Click logic for playback control
            let audio = null;
            let audioTimeout = null;

            speakerBtn.addEventListener('click', () => {
                // Stop this speaker
                if (activeSpeakerIcon === speakerBtn) {
                    clearTimeout(audioTimeout);
                    audioTimeout = null;

                    if (audio) {
                        audio.pause();
                        audio.currentTime = 0;
                    }

                    speakerBtn.style.color = '#aaa';
                    activeSpeakerIcon = null;
                    return;
                }

                // Stop any other speaker
                if (activeSpeakerIcon) {
                    clearTimeout(currentAudioInterval);

                    if (activeSpeakerIcon.audio) {
                        activeSpeakerIcon.audio.pause();
                        activeSpeakerIcon.audio.currentTime = 0;
                    }

                    activeSpeakerIcon.style.color = '#aaa';
                }

                activeSpeakerIcon = speakerBtn;
                speakerBtn.style.color = '#4caf50';

                const speedVal = parseFloat(speedNum);
                const speedScale = 200; // Adjust this to tweak overall responsiveness
                const baseOffset = 850; // Adjust this to shift the baseline tempo

                // Formula: As speedVal goes up, the interval drops nicely
                const rawInterval = baseOffset - (speedVal * speedScale);
                const intervalTime = Math.max(200, Math.round(rawInterval));

                // One audio object for this speaker
                audio = new Audio('footstep.wav');

                // Store it on the button so another speaker can stop it
                speakerBtn.audio = audio;

                const playFootstep = () => {
                    if (activeSpeakerIcon !== speakerBtn) return;

                    audio.currentTime = 0;

                    audio.play().catch(err => {
                        console.log("Audio play blocked:", err);
                    });

                    // Wait for the interval before playing again
                    currentAudioInterval = setTimeout(playFootstep, intervalTime);
                };

                playFootstep();
            });

            speedItemSpan.appendChild(speakerBtn);
            speedValDiv.appendChild(speedItemSpan);
        });

        card.appendChild(speedValDiv);

        // Tells Scrollable Box
        const tellsBox = document.createElement('div');
        tellsBox.className = 'ghost-tells';
        ghost.tells.forEach(tell => {
            const p = document.createElement('p');
            p.textContent = tell;
            tellsBox.appendChild(p);
        });
        card.appendChild(tellsBox);

        container.appendChild(card);
    });
}

// Populate UI sections
populateSection('#evidence-rows', evidenceTypes, 'evidence-row', false);
populateSection('#speed-rows', speedTypes, 'speed-row', false);
populateSection('#behavior-rows', behaviorTypes, 'behavior-row', true);
populateGhostCards();

// 3. Filtering Engine Logic
function applyFilters() {
    // Gather Checked and Crossed Evidences
    const checkedEvidences = [];
    const crossedEvidences = [];
    document.querySelectorAll('.evidence-row').forEach(row => {
        const state = row.dataset.state;
        const text = row.querySelector('span').textContent.trim();
        if (state === '1') checkedEvidences.push(text);
        if (state === '2') crossedEvidences.push(text);
    });

    // Gather Checked Speeds
    const checkedSpeeds = [];
    document.querySelectorAll('.speed-row').forEach(row => {
        const state = row.dataset.state;
        if (state === '1') {
            checkedSpeeds.push(row.querySelector('span').textContent.trim().toLowerCase());
        }
    });

    // Gather Checked Behaviors (CannotDo flags)
    const checkedBehaviors = [];
    document.querySelectorAll('.behavior-row').forEach(row => {
        const state = row.dataset.state;
        if (state === '1') {
            const code = row.querySelector('input').dataset.behaviorType;
            checkedBehaviors.push(code.toLowerCase());
        }
    });

    // Evaluate each ghost card
    const cards = document.querySelectorAll('.ghost-card');
    cards.forEach(card => {
        let hide = false;

        // Rule 1: Hide if card matches ANY crossed evidence
        const cardEvidences = [
            card.dataset.evidence1,
            card.dataset.evidence2,
            card.dataset.evidence3
        ];
        for (let ce of crossedEvidences) {
            if (cardEvidences.includes(ce)) {
                hide = true;
                break;
            }
        }

        // Rule 2: Hide if card lacks ANY checked evidence
        for (let che of checkedEvidences) {
            if (!cardEvidences.includes(che)) {
                hide = true;
                break;
            }
        }

        // Rule 3: Speed filtering (if speed filters are active)
        if (checkedSpeeds.length > 0) {
            let matchesSpeed = false;
            if (checkedSpeeds.includes('slow') && card.dataset.speedSlow === 'true') matchesSpeed = true;
            if (checkedSpeeds.includes('normal') && card.dataset.speedNormal === 'true') matchesSpeed = true;
            if (checkedSpeeds.includes('fast') && card.dataset.speedFast === 'true') matchesSpeed = true;
            if (!matchesSpeed) hide = true;
        }

        // Rule 4: CannotDo behavior filtering (If checked, hide cards that have true on that attribute)
        for (let cb of checkedBehaviors) {
            const attrValue = card.getAttribute('data-' + cb);
            if (attrValue === 'true') {
                hide = true;
                break;
            }
        }

        // Apply display style
        card.style.display = hide ? 'none' : 'flex';
    });
}

// 4. Event Listeners for Clicks & State Rotation

// Evidence: Tri-State (0 -> 1 -> 2 -> 0)
const evidenceContainer = document.querySelector('#evidence-rows');
evidenceContainer.addEventListener('click', (e) => {
    const row = e.target.closest('.evidence-row');
    if (!row) return;
    e.preventDefault();

    let currentState = parseInt(row.dataset.state) || 0;
    let nextState = (currentState + 1) % 3;
    row.dataset.state = nextState;
    row.querySelector('input').checked = (nextState === 1);
    applyFilters();
});

// Helper for Bi-State sections (Speed & Behavior)
const setupBiStateListener = (containerSelector, rowClassName) => {
    const container = document.querySelector(containerSelector);
    container.addEventListener('click', (e) => {
        const row = e.target.closest(rowClassName);
        if (!row) return;
        e.preventDefault();

        let currentState = parseInt(row.dataset.state) || 0;
        let nextState = currentState === 0 ? 1 : 0;
        row.dataset.state = nextState;
        row.querySelector('input').checked = (nextState === 1);
        applyFilters();
    });
};

setupBiStateListener('#speed-rows', '.speed-row');
setupBiStateListener('#behavior-rows', '.behavior-row');

// Allow manual card dismissal via the "X" button to make it transparent
document.querySelector('#ghosts').addEventListener('click', (e) => {
    if (e.target.classList.contains('ghost-close-btn')) {
        const card = e.target.closest('.ghost-card');
        if (card) {
            card.classList.toggle('dismissed');
        }
    }
});