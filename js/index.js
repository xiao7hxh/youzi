(() => {
  const vIds = ['1144400', '1434480', '888790', '1044620', '1277930', '2358720'];

  /**
   * @param {number} max
   * @returns {number}
   */
  function randMax(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  /**
   * @param {any[]} list
   * @returns {string}
   */
  function choose(list) {
    const index = randMax(list.length - 1);
    return list[index];
  }

  window.addEventListener('load', () => {
    window.player = new APlayer({
      container: document.getElementById('aplayer'),
      // fixed: true,
      mini: true,
      loop: 'none',
      audio: [
        {
          name: 'Voice',
          artist: '小夏春美',
          url: 'assets/Ciallo～.ogg',
        },
        {
          name: '恋せよ乙女！',
          artist: '小夏春美',
          url: 'assets/Famishin,KOTOKO - 恋ひ恋ふ縁.mp3',
        },
      ],
    });

    /** @type {HTMLAnchorElement} */
    const tip = document.getElementById('tip');
    /** @type {HTMLImageElement} */
    const bg = document.getElementById('bg');

    tip.style.opacity = 1;
    tip.addEventListener('click', () => {
      tip.style.opacity = 0;
      bg.style.opacity = 1;
      bg.addEventListener('click', () => {
        window.location.href = `https://store.steampowered.com/app/${choose(vIds)}`;
      });

      setTimeout(() => {
        tip.style.display = 'none';
        window.player.play();
        document.title = '私たちYuziファンは本当に強いです！';
      }, 1000);
    });
  });
})();

