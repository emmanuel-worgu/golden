(function payment() {
  console.log('Payment Page');
  const depo_amount = localStorage.getItem('depo_amount');
  const wallet = localStorage.getItem('walletType');
  document.getElementById('amount_depo').textContent = `$${depo_amount.toLocaleString('en-US')}`
  document.getElementById('tow').textContent = `${wallet} Address:`;
  const copy = document.getElementById('copyWallet');


  // Wallet address for octaprotraders.online
  if (siteName === 'octaprotraders.online') {
    console.log('Working for only octaprotraders...');
    if ('USDT' === wallet.trim()) {
      return copy.value = '0x6a5f385b7529c48298ed462927b7bcb742f84c5d'
    }
  
    if ('Ethereum' === wallet.trim()) {
      return copy.value = '0x6a5f385b7529c48298ed462927b7bcb742f84c5d'
    }
  
    if ('Bitcoin' === wallet.trim()) {
      return copy.value = '0x6a5f385b7529c48298ed462927b7bcb742f84c5d'
    }
  }


  // Wallet address for elitecryptoinvestors.com
  if (siteName === 'elitecryptoinvestors.com') {
    console.log('Working for only octaprotraders...');
    if ('USDT' === wallet.trim()) {
      return copy.value = 'TYyRrU3hQp4wdbpyoLhJ9juUiHL2Jj4YHi'
    }
  
    if ('Ethereum' === wallet.trim()) {
      return copy.value = '0x54F33c33B39fdc09D34e665574F695FcBbe04D4F'
    }
  
    if ('Bitcoin' === wallet.trim()) {
      return copy.value = '1AfwJFfUH8gdyZBHYT8FQYXYRzxuEckCEm'
    }
  }


  // Wallet address for other sites
  if ('USDT' === wallet.trim()) {
    return copy.value = 'TURvyCNXoJU7jRpw3Ay87875S8HXGvpbRM'
  }

  if ('Ethereum' === wallet.trim()) {
    return copy.value = '0x43e1f7772b826c6cc0f07476a5cc32e340da016e'
  }

  if ('Bitcoin' === wallet.trim()) {
    return copy.value = '38UHbxGDK4VAU9VUHJDJgzHQSYdG3g96CW'
  }

  document.location.href = '/deposit.html';
} ());
