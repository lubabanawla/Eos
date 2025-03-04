// ----- Data & State -----
const songs = [
    {
      id: 1,
      title: "We Are The People",
      artist: "Empire of the Sun",
      // Approximate duration in seconds (6:15)
      duration: 375,
      src: "wearethepeople.mp3",
      cover: "coverwearethepeople.jpeg",
      lyrics: `[00:00.00]Verse:
  [00:05.00]We can remember
  [00:10.00]Swimming in December
  [00:15.00]Heading for the city lights in 1975
  [00:20.00]We share in each other
  [00:25.00]Nearer than farther
  [00:30.00]The scent of a lemon drips from your eyes
  [00:35.00]Chorus:
  [00:40.00]We are the people that rule the world
  [00:45.00]A force running in every boy and girl
  [00:50.00]All rejoicing in the world
  [00:55.00]Take me now, we can try
  [01:00.00]Verse:
  [01:05.00]We lived an adventure
  [01:10.00]Love in the summer
  [01:15.00]Followed the sun till night
  [01:20.00]Reminiscing other times of life
  [01:25.00]For each every other
  [01:30.00]The feeling was stronger
  [01:35.00]The shock hit eleven, got lost in your eyes
  [01:40.00]Chorus:
  [01:45.00]I can’t do well
  [01:50.00]When I think you're gonna leave me
  [01:55.00]But I’m gonna try
  [02:00.00]Are you gonna leave me now?
  [02:05.00]Can't you be believing now?
  [02:10.00]I can't do well
  [02:15.00]When I think you’re gonna leave me
  [02:20.00]But I'm gonna try
  [02:25.00]Are you gonna leave me now?
  [02:30.00]Can't you be believing now?
  [02:35.00]Verse:
  [02:40.00]Can you remember and humanize?
  [02:45.00]It was still where we’d energised
  [02:50.00]Lie in the sand and visualise
  [02:55.00]Like it's '75 again
  [03:00.00]Chorus:
  [03:05.00]We are the people that rule the world
  [03:10.00]A force running in every boy and girl
  [03:15.00]All rejoicing in the world
  [03:20.00]Take me now, we can try
  [03:25.00]I can't do well
  [03:30.00]When I think you're gonna leave me
  [03:35.00]But I'm gonna try
  [03:40.00]Are you gonna leave me now?
  [03:45.00]Can't you be believing now?
  [03:50.00]I can’t do well
  [03:55.00]When I think you're gonna leave me
  [04:00.00]But I'm gonna try
  [04:05.00]Are you gonna leave me now?
  [04:10.00]Can't you be believing now?
  [04:15.00]Bridge:
  [04:20.00]I know everything about you
  [04:25.00]You know everything about me
  [04:30.00]We know everything about us
  [04:35.00]I know everything about you
  [04:40.00]You know everything about me
  [04:45.00]We know everything about us
  [04:50.00]Chorus:
  [04:55.00]I can't do well
  [05:00.00]When I think you’re gonna leave me
  [05:05.00]But I'm gonna try
  [05:10.00]Are you gonna leave me now?
  [05:15.00]Can't you be believing now?
  [05:20.00]I can't do well
  [05:25.00]When I think you're gonna leave me
  [05:30.00]But I'm gonna try
  [05:35.00]Are you gonna leave me now?
  [05:40.00]Can't you be believing now?
  [05:45.00]I can't do well
  [05:50.00]When I think you're gonna leave me
  [05:55.00]But I'm gonna try
  [06:00.00]Are you gonna leave me now?
  [06:05.00]Can't you be believing now?
  [06:10.00]Outro:
  [06:15.00]I can't do well`
    },
    {
      id: 2,
      title: "The Wanderlust",
      artist: "Metric",
      // Approximate duration in seconds (5:20)
      duration: 320,
      src: "thewanderlust.mp3",
      cover: "coverthewanderlust.jpeg",
      lyrics: `[00:00.00]Verse:
  [00:05.00]I’ve been sleepwalking (I've been sleepwalking)
  [00:10.00]Through the railway station (through the railway station)
  [00:15.00]Wake me up (wake me up)
  [00:20.00]When they call my destination (when they call my destination)
  [00:25.00]Where I’ve been (where I've been)
  [00:30.00]I was bound to leave behind (I was bound to leave behind)
  [00:35.00]All device (all device)
  [00:40.00]And all disease was mine (and all disease was mine)
  [00:45.00]Pre-Chorus:
  [00:50.00]Oh, speeding out of reach
  [00:55.00]Oh, you're the one I had to meet
  [01:00.00]Chorus:
  [01:05.00]I never wanted to go home
  [01:10.00](The wanderlust will carry your song)
  [01:15.00]There was nothing there for me
  [01:20.00](The wanderlust will carry your song)
  [01:25.00]In a high rise on my own
  [01:30.00](I’ve been on the brinks of highways for so long)
  [01:35.00]Looking out in a mirrored balcony
  [01:40.00](The wanderlust will carry your song)
  [01:45.00]Will there ever be a place for you and me?
  [01:50.00](The wanderlust)
  [01:55.00]Verse:
  [02:00.00]I’m rolling in (I'm rolling in)
  [02:05.00]For a seven day weekend (seven day weekend)
  [02:10.00]Living up again (living up again)
  [02:15.00]To my old reputation (my old reputation)
  [02:20.00]Can you cover me (can you cover me)
  [02:25.00]’Cause I got no armour ('cause I got no armour)
  [02:30.00]Keep moving on down the line
  [02:35.00]Keep on going further (keep on going further)
  [02:40.00]Pre-Chorus:
  [02:45.00]Oh, speeding out of reach
  [02:50.00]Oh, you’re the one I had to meet
  [02:55.00]Chorus:
  [03:00.00]I never wanted to go home
  [03:05.00](The wanderlust will carry your song)
  [03:10.00]There was nothing there for me
  [03:15.00](The wanderlust will carry your song)
  [03:20.00]In a high rise on my own
  [03:25.00](I've been on the brinks of highways so long)
  [03:30.00]Looking out in a mirrored balcony
  [03:35.00](The wanderlust will carry, carry, carry your song)
  [03:40.00]I don’t know where to go, now I got nowhere to hide
  [03:45.00](Nowhere to go, nowhere to be)
  [03:50.00]I don't know where to go, now I got nowhere to be
  [03:55.00](Oh, wanderlust will carry your song)
  [04:00.00]Walk fifty city blocks down but they always find us
  [04:05.00](The wanderlust will carry your song)
  [04:10.00]Will there ever be a place for you and me?
  [04:15.00](The wanderlust will carry your song)
  [04:20.00]Will there ever be a place for you and me?`
    },
    {
      id: 3,
      title: "You Are The Right One",
      artist: "Sports",
      // Approximate duration in seconds (4:00)
      duration: 240,
      src: "youaretherightone.mp3",
      cover: "coveryouaretherightone.jpg",
      lyrics: `[00:00.00]You were the right way
  [00:05.00]I was just waitin′ for you to look at me
  [00:10.00]Is there a wrong time?
  [00:15.00]Baby, I'm guessin′
  [00:20.00]Just let me know
  [00:25.00]Just let me know
  [00:30.00]Well, it's been a long time
  [00:35.00]Since you've been lonely
  [00:40.00]So what will I do?
  [00:45.00]You are the right one
  [00:50.00]And I′m just the boy who is lookin′ at you
  [00:55.00]So what will I do?
  [01:00.00]I tried the wrong way
  [01:05.00]I was just guessin', bidin′ my time
  [01:10.00]You are the only one I can picture by my side
  [01:15.00]By my side`
    }
  ];
  
  // ----- Helper Functions -----
  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return mins + ":" + (secs < 10 ? "0" : "") + secs;
  }
  
  function parseLyrics(lyricsText) {
    if (!lyricsText) return [];
    return lyricsText.split("\n").map(line => {
      const match = line.match(/\[(\d+):(\d+\.\d+)\](.*)/);
      if (match) {
        const minutes = parseInt(match[1]);
        const seconds = parseFloat(match[2]);
        return { time: minutes * 60 + seconds, text: match[3].trim() };
      }
      return null;
    }).filter(item => item !== null);
  }
  
  function updateSongDisplay() {
    const song = songs[currentSongIndex];
    document.getElementById("song-title").textContent = song.title;
    document.getElementById("song-artist").textContent = song.artist;
    document.getElementById("cover").src = song.cover;
    document.getElementById("audio").src = song.src;
    document.getElementById("duration").textContent = formatTime(song.duration);
    parsedLyrics = parseLyrics(song.lyrics);
    renderLyricsList();
  }
  
  function renderPlaylist() {
    const playlistEl = document.getElementById("playlist");
    playlistEl.innerHTML = "";
    songs.forEach((song, index) => {
      const item = document.createElement("div");
      item.className = "playlist-item" + (index === currentSongIndex ? " active" : "");
      item.innerHTML = `
        <img src="${song.cover}" alt="${song.title}">
        <div class="info">
          <p><strong>${song.title}</strong></p>
          <p>${song.artist}</p>
        </div>
        <div class="time">${formatTime(song.duration)}</div>
      `;
      item.addEventListener("click", () => {
        currentSongIndex = index;
        updateSongDisplay();
        renderPlaylist();
        resetPlayer();
        playSong();
      });
      playlistEl.appendChild(item);
    });
  }
  
  function renderLyricsList() {
    const container = document.getElementById("lyrics-container");
    container.innerHTML = "";
    parsedLyrics.forEach((lyric, idx) => {
      const p = document.createElement("p");
      p.textContent = lyric.text;
      p.setAttribute("data-index", idx);
      container.appendChild(p);
    });
  }
  
  function updateKaraoke(currentTime) {
    if (!karaokeMode || parsedLyrics.length === 0) return;
    let currentLine = "";
    parsedLyrics.forEach((lyric, idx) => {
      const nextLyric = parsedLyrics[idx + 1];
      if (currentTime >= lyric.time && (!nextLyric || currentTime < nextLyric.time)) {
        currentLine = lyric.text;
        document.querySelectorAll("#lyrics-container p").forEach(p => p.classList.remove("active"));
        const activeP = document.querySelector(`#lyrics-container p[data-index="${idx}"]`);
        if (activeP) {
          activeP.classList.add("active");
          activeP.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
    });
    document.getElementById("current-lyric").textContent = currentLine || "...";
  }
  
  function resetPlayer() {
    const audio = document.getElementById("audio");
    audio.currentTime = 0;
    document.getElementById("seek-slider").value = 0;
    document.getElementById("current-time").textContent = "0:00";
  }
  
  function playSong() {
    const audio = document.getElementById("audio");
    audio.play().then(() => {
      isPlaying = true;
      document.getElementById("play-pause-btn").textContent = "Pause";
    }).catch(err => {
      console.error("Playback error:", err);
    });
  }
  
  function pauseSong() {
    const audio = document.getElementById("audio");
    audio.pause();
    isPlaying = false;
    document.getElementById("play-pause-btn").textContent = "Play";
  }
  
  // ----- Nova Chatbot System -----
  const systemPrompt = `You are Nova, a friendly and knowledgeable music assistant. Your job is to help users discover music, recommend songs, and provide information about artists, genres, and more. Be witty, engaging, and helpful. When you perform an action, describe it in brackets, like *[Nova hums a tune.]*. Always respond in a concise and friendly manner.`;
  
  // Function to add messages to chat log
  function addMessageToChatLog(message, sender) {
    const chatLog = document.getElementById("chat-messages");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add(
      "chat-message",
      sender === "user" ? "user-message" : "nova-message"
    );
  
    // Parse markdown to HTML
    const parsedMessage = marked.parse(message);
    messageDiv.innerHTML = parsedMessage;
  
    chatLog.appendChild(messageDiv);
  
    // Auto scroll to the bottom
    chatLog.scrollTop = chatLog.scrollHeight;
  }
  
  // Nova's response using the API
  async function getNovaResponse(userMessage) {
    try {
      const payload = {
        model: "deepseek/deepseek-r1:free",
        messages: [
          {
            role: "system",
            content: systemPrompt
          },
          {
            role: "user",
            content: userMessage
          }
        ],
        stream: false,
      };
  
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status} \n ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log("Success:", data);
  
      // Check if response is structured correctly
      if (!data.choices || !data.choices[0] || !data.choices[0].message || !data.choices[0].message.content) {
        throw new Error("Response structure unexpected: Missing 'choices[0].message.content'");
      }
  
      return data.choices[0].message.content;
    } catch (error) {
      console.error("Fetch error:", error);
      return "Nova is unable to connect to the server right now. Please try again later!";
    }
  }
  
  // Handle user input
  document.getElementById("chat-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const input = document.getElementById("chat-input");
    const userInput = input.value.trim();
    if (userInput === "") return;
  
    addMessageToChatLog(userInput, "user");
    const novaResponse = await getNovaResponse(userInput);
    addMessageToChatLog(novaResponse, "nova");
    input.value = "";
  });
  
  document.getElementById("chat-input").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      document.getElementById("chat-form").dispatchEvent(new Event("submit"));
    }
  });
  
  // Initialize Nova's introduction
  document.addEventListener("DOMContentLoaded", async () => {
    const initialPrompt = `Hi! I'm Nova, your music assistant. What would you like to listen to today?`;
    addMessageToChatLog(initialPrompt, "nova");
  });
  
  // ----- Player State & Initialization -----
  let currentSongIndex = 0;
  let isPlaying = false;
  let karaokeMode = false;
  let isMuted = false;
  let volume = 80;
  let parsedLyrics = [];
  
  document.addEventListener("DOMContentLoaded", () => {
    updateSongDisplay();
    renderPlaylist();
  
    const audio = document.getElementById("audio");
    audio.addEventListener("timeupdate", () => {
      const current = audio.currentTime;
      const duration = songs[currentSongIndex].duration;
      document.getElementById("current-time").textContent = formatTime(current);
      document.getElementById("seek-slider").value = (current / duration) * 100;
      updateKaraoke(current);
    });
  
    document.getElementById("seek-slider").addEventListener("input", (e) => {
      const percent = e.target.value;
      const newTime = (percent / 100) * songs[currentSongIndex].duration;
      audio.currentTime = newTime;
    });
  
    document.getElementById("play-pause-btn").addEventListener("click", () => {
      if (isPlaying) {
        pauseSong();
      } else {
        playSong();
      }
    });
  
    document.getElementById("prev-btn").addEventListener("click", () => {
      currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
      updateSongDisplay();
      renderPlaylist();
      resetPlayer();
      if (isPlaying) playSong();
    });
  
    document.getElementById("next-btn").addEventListener("click", () => {
      currentSongIndex = (currentSongIndex + 1) % songs.length;
      updateSongDisplay();
      renderPlaylist();
      resetPlayer();
      if (isPlaying) playSong();
    });
  
    document.getElementById("volume-slider").addEventListener("input", (e) => {
      volume = e.target.value;
      if (isMuted && volume > 0) {
        isMuted = false;
        document.getElementById("mute-btn").textContent = "Mute";
      }
      audio.volume = volume / 100;
    });
  
    document.getElementById("mute-btn").addEventListener("click", () => {
      isMuted = !isMuted;
      if (isMuted) {
        audio.volume = 0;
        document.getElementById("mute-btn").textContent = "Unmute";
      } else {
        audio.volume = volume / 100;
        document.getElementById("mute-btn").textContent = "Mute";
      }
    });
  
    document.getElementById("karaoke-toggle-input").addEventListener("change", (e) => {
      karaokeMode = e.target.checked;
      document.getElementById("karaoke-display").style.display = karaokeMode ? "block" : "none";
      document.getElementById("lyrics-container").style.display = karaokeMode ? "block" : "none";
    });
  
    document.querySelectorAll(".tab-button").forEach(button => {
      button.addEventListener("click", () => {
        document.querySelectorAll(".tab-button").forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        const tab = button.getAttribute("data-tab");
        document.querySelectorAll(".tab-content").forEach(content => {
          content.style.display = content.id === tab ? "block" : "none";
        });
      });
    });
  });