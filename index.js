// ----- Data & State -----
const songs = [
    {
      id: 1,
      title: "We Are The People",
      artist: "Empire of the Sun",
      // Approximate duration in seconds (4:27)
      duration: 257,
      src: "wearethepeople.mp3",
      cover: "coverwearethepeople.jpeg",
      lyrics: `
    [00:16.00]We can remember
    [00:20.00]Swimming in December
    [00:24.00]Heading for the city lights in 1975
    [00:31.00]We share in each other
    [00:35.00]Nearer than farther
    [00:39.00]The scent of a lemon drips from your eyes
    [00:47.00]We are the people that rule the world
    [00:51.00]A force running in every boy and girl
    [00:55.00]All rejoicing in the world
    [00:58.00]Take me now, we can try
    [01:02.00]We lived an adventure
    [01:07.00]Love in the summer
    [01:10.00]Followed the sun till night
    [01:13.00]Reminiscing other times of life
    [01:18.00]For each every other
    [01:23.00]The feeling was stronger
    [01:26.00]The shock hit eleven, got lost in your eyes
    [01:33.00]I can’t do well
    [01:35.00]When I think you're gonna leave me
    [01:36.00]But I’m gonna try
    [01:40.00]Are you gonna leave me now?
    [01:44.00]Can't you be believing now?
    [01:48.00]I can't do well
    [01:50.00]When I think you’re gonna leave me
    [01:52.00]But I'm gonna try
    [01:55.00]Are you gonna leave me now?
    [01:59.00]Can't you be believing now?
    [02:05.00]Can you remember and humanize?
    [02:10.00]It was still where we’d energised
    [02:13.00]Lie in the sand and visualise
    [02:16.00]Like it's '75 again
    [02:21.00]We are the people that rule the world
    [02:25.00]A force running in every boy and girl
    [02:28.00]All rejoicing in the world
    [02:32.00]Take me now, we can try
    [02:35.00]I can't do well
    [02:37.00]When I think you're gonna leave me
    [02:39.00]But I'm gonna try
    [02:42.00]Are you gonna leave me now?
    [02:47.00]Can't you be believing now?
    [02:51.00]I can’t do well
    [02:53.00]When I think you're gonna leave me
    [02:54.00]But I'm gonna try
    [02:58.00]Are you gonna leave me now?
    [03:02.00]Can't you be believing now?
    [03:07.00]I know everything about you
    [03:11.00]You know everything about me
    [03:15.00]We know everything about us
    [03:22.00]I know everything about you
    [03:26.00]You know everything about me
    [03:30.00]We know everything about us
    [03:38.00]I can't do well
    [03:39.00]When I think you’re gonna leave me
    [03:41.00]But I'm gonna try
    [03:45.00]Are you gonna leave me now?
    [03:48.00]Can't you be believing now?
    [03:53.00]I can't do well
    [03:55.00]When I think you're gonna leave me
    [03:57.00]But I'm gonna try
    [04:00.00]Are you gonna leave me now?
    [04:04.00]Can't you be believing now?
    [04:09.00]I can't do well
    [04:11.00]When I think you're gonna leave me
    [04:12.00]But I'm gonna try
    [04:16.00]Are you gonna leave me now?
    [04:20.00]Can't you be believing now?
    [04:25.00]I can't do well`
    },
    {
      id: 2,
      title: "The Wanderlust",
      artist: "Metric",
      // Approximate duration in seconds (3:10)
      duration: 186,
      src: "thewanderlust.mp3",
      cover: "coverthewanderlust.jpeg",
      lyrics: `
    [00:00.00]I’ve been sleepwalking (I've been sleepwalking)
    [00:03.00]Through the railway station (through the railway station)
    [00:08.00]Wake me up (wake me up)
    [00:10.00]When they call my destination (when they call my destination)
    [00:14.00]Where I’ve been (where I've been)
    [00:18.00]I was bound to leave behind (I was bound to leave behind)
    [00:22.00]All device (all device)
    [00:25.00]And all disease was mine (and all disease was mine)
    [00:29.00]Oh, speeding out of reach
    [00:36.00]Oh, you're the one I had to meet
    [00:45.00]I never wanted to go home
    [00:48.00](The wanderlust will carry your song)
    [00:52.00]There was nothing there for me
    [00:56.00](The wanderlust will carry your song)
    [00:59.00]In a high rise on my own
    [01:02.00](I’ve been on the brinks of highways for so long)
    [01:05.00]Looking out in a mirrored balcony
    [01:09.00](The wanderlust will carry your song)
    [01:12.00]Will there ever be a place for you and me?
    [01:17.00](The wanderlust)
    [01:19.00]I’m rolling in (I'm rolling in)
    [01:22.00]For a seven day weekend (seven day weekend)
    [01:26.00]Living up again (living up again)
    [01:29.00]To my old reputation (my old reputation)
    [01:33.00]Can you cover me (can you cover me)
    [01:37.00]’Cause I got no armour ('cause I got no armour)
    [01:41.00]Keep moving on down the line
    [01:43.00]Keep on going further (keep on going further)
    [01:48.00]Oh, speeding out of reach
    [01:55.00]Oh, you’re the one I had to meet
    [02:03.00]I never wanted to go home
    [02:08.00](The wanderlust will carry your song)
    [02:11.00]There was nothing there for me
    [02:15.00](The wanderlust will carry your song)
    [02:18.00]In a high rise on my own
    [02:21.00](I've been on the brinks of highways so long)
    [02:24.00]Looking out in a mirrored balcony
    [02:27.00](The wanderlust will carry, carry, carry your song)
    [02:31.00]I don’t know where to go, now I got nowhere to hide
    [02:36.00](Nowhere to go, nowhere to be)
    [02:38.00]I don't know where to go, now I got nowhere to be
    [02:42.00](Oh, wanderlust will carry your song)
    [02:45.00]Walk fifty city blocks down but they always find us
    [02:49.00](The wanderlust will carry your song)
    [02:52.00]Will there ever be a place for you and me?
    [02:56.00](The wanderlust will carry your song)
    [03:00.00]Will there ever be a place for you and me?`
    },
    {
      id: 3,
      title: "You Are The Right One",
      artist: "Sports",
      // Approximate duration in seconds (2:52)
      duration: 152,
      src: "youaretherightone.mp3",
      cover: "coveryouaretherightone.jpg",
      lyrics: `[00:34.00]You were the right way
    [00:39.00]I was just waitin′ for you to look at me
    [00:44.00]Is there a wrong time?
    [00:48.00]Baby, I'm guessin′
    [00:51.00]Just let me know
    [01:00.00]Just let me know
    [01:12.00]Well, it's been a long time
    [01:17.00]Since you've been lonely
    [01:20.00]So what will I do?
    [01:22.00]You are the right one
    [01:27.00]And I′m just the boy who is lookin′ at you
    [01:38.00]So what will I do?
    [01:51.00]I tried the wrong way
    [01:56.00]I was just guessin', bidin′ my time
    [02:00.00]You are the only one I can picture by my side
    [02:17.00]By my side`
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
  
  const chatMessages = [
    { role: "system", content: "Hi! I can help you find music based on your mood, preferences, or activities. What would you like to listen to today?" }
  ];
  
  function renderChat() {
    const chatContainer = document.getElementById("chat-messages");
    chatContainer.innerHTML = "";
    chatMessages.forEach(msg => {
      const msgDiv = document.createElement("div");
      msgDiv.className = "chat-message " + msg.role;
      const bubble = document.createElement("div");
      bubble.className = "bubble";
      bubble.textContent = msg.content;
      msgDiv.appendChild(bubble);
      chatContainer.appendChild(msgDiv);
    });
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }
  
  function simulateChatResponse(userInput) {
    let response = "";
    const query = userInput.toLowerCase();
    if (query.includes("happy") || query.includes("upbeat")) {
      response = "I recommend some upbeat songs like 'We Are The People' by Empire of the Sun.";
    } else if (query.includes("nostalgic")) {
      response = "For a nostalgic mood, 'The Wanderlust' by Metric would be perfect.";
    } else if (query.includes("romantic")) {
      response = "You might enjoy 'You Are The Right One' by Sports. It has a great vibe!";
    } else {
      response = "Based on your preferences, I think you might enjoy 'We Are The People' by Empire of the Sun.";
    }
    setTimeout(() => {
      chatMessages.push({ role: "system", content: response });
      renderChat();
    }, 1000);
  }
  
  let currentSongIndex = 0;
  let isPlaying = false;
  let karaokeMode = false;
  let isMuted = false;
  let volume = 80;
  let parsedLyrics = [];
  
  // ----- Event Listeners & Initialization -----
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
  
    document.getElementById("chat-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const input = document.getElementById("chat-input");
      const message = input.value.trim();
      if (message === "") return;
      chatMessages.push({ role: "user", content: message });
      renderChat();
      input.value = "";
      simulateChatResponse(message);
    });
  
    renderChat();
  });
  