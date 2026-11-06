/* マゴノテlink - 共通JavaScript */
document.addEventListener('DOMContentLoaded', () => {
  // お気に入りハートの切り替え機能（依頼一覧等）
  const hearts = document.querySelectorAll('.heart-icon');
  hearts.forEach(heart => {
    heart.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (heart.style.opacity === '0.4') {
        heart.style.opacity = '1';
      } else {
        heart.style.opacity = '0.4';
      }
    });
  });

  // 星評価の操作
  const stars = document.querySelectorAll('.star-rating span');
  if (stars.length > 0) {
    stars.forEach((star, index) => {
      star.addEventListener('click', () => {
        stars.forEach((s, i) => {
          if (i <= index) {
            s.textContent = '★';
          } else {
            s.textContent = '☆';
          }
        });
      });
    });
  }
});

// 依頼削除確認ダイアログ
function confirmDelete() {
  if (confirm('この依頼を削除してもよろしいですか？')) {
    alert('依頼を削除しました。');
  }
}
