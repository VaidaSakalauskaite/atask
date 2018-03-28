<!doctype html>
<html lang=en>
<?php  include 'components/head.php'  ?>
  <body>
      <?php include 'components/header.php' ?>
      <section class="blog page-header">
        <div class="container">
          <div class="about-us-header">
            <h1>CONTACT US  </h1>
            <div class="nav-path">
              <a href="index.php">Home </a> >
              <a href="contact.php">Contact Us</a>
            </div>
          </div>
        </div>
      </section>
      <section class="contact-us">
        <div class="container">
          <h2>FROM BLOG</h2>
            <div class="line"></div>
            <div class="input-area">
              <input type="text" class="input first-name" placeholder="First Name">
              <input type="text" class="input surname" placeholder="Surname">
              <input type="text" class="input email" placeholder="Your E-mail">
              <input type="text" class="input website" placeholder="Website">
              <textarea class="message" rows="8" cols="80" placeholder="Your message"></textarea>
            <button class="btn-send" type="submit">SEND</button>
          </div>
        </div>
      </section>
      <?php include 'components/footer.php' ?>
  </body>
</html>
