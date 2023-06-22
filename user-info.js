document.getElementById('search-button').addEventListener('click', function() {
    const username = document.getElementById('username-input').value;
    const url = `https://api.github.com/users/${username}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const userInfoElement = document.getElementById('user-info');
        if (data.message) {
          userInfoElement.textContent = `Erro: ${data.message}`;
        } else {
          const html = `
           
               <div class ="user-avatar">
                 <img src =${data.avatar_url} alt="Foto do usuário">
                  </div>
                    <div class ="user-details">
            <p><strong>Nome:</strong> ${data.name || 'N/A'}</p>
            <p><strong>Biografia:</strong> ${data.bio || 'N/A'}</p>
            <p><strong>Localização:</strong> ${data.location || 'N/A'}</p>
            <p><strong>Repositórios Públicos:</strong> ${data.public_repos || 'N/A'}</p>
            <p><strong>Seguidores:</strong> ${data.followers || 'N/A'}</p>
            <p><strong>Seguindo:</strong> ${data.following || 'N/A'}</p>
          `;
  
          userInfoElement.innerHTML = html;
        }
      })
      .catch(error => {
        console.error('Erro:', error);
      });
  });
  