<template>
  <header class="header">
    <div class="header__promotion">
      <div class="container display-flex align-items-center">
        <div class="header__promotion-left">
          <p>
            <span>SWITCH & SAVE</span>
            <span>Get up to 1 year subscription - free when you switch to Nitro. <a href="javascript.void(0)">Learn How.</a></span>
          </p>
        </div>
        <ul class="header__promotion-right">
          <li>About Nitro</li>
          <li>Partners</li>
          <li>Support</li>
          <li>Nitro Login</li>
        </ul>
      </div>
    </div>
    <div class="header__menu">
      <div class="container display-flex align-items-center">
        <img src="@/assets/images/nitro-logo.svg" alt="Nitro Logo" class="header__menu-logo">
        <ul class="header__menu-content">
          <li>Products</li>
          <li>Industry</li>
          <li>Resources</li>
          <li>Plans & Pricing</li>
          <li>Try For Free</li>
          <li>Buy Now</li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  background-color: var(--headerBgColor);
  box-shadow: 0 4px 6px rgba(0,0,0,.04), 0 2px 10px rgba(0,0,0,.06);
  top: 0;
  position: sticky;
  z-index: 9999;

  &__promotion {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 42px;
    background: var(--footerBgColor);
    padding: 0 2rem;

    &-left {
      display: flex;
      align-items: center;
      height: 100%;

      span:nth-child(1) {
        color: var(--spark);
        font-size: 14px;
        margin-right: 1rem;
        font-weight: 600;
        font-family: "IBM Plex Mono", Arial, Helvetica, sans-serif;
      }

      span:nth-child(2) {
        font-size: 0.875rem;
        color: var(--inverseTextColor);

        a {
          color: var(--linkTextColor);
          text-decoration: none;
          &:hover {
            color: rgba(var(--linkTextColor), .6);
            transition: .3s all;
          }
        }
      }
    }

    &-right {
      list-style-type: none;
      padding: 0;
      margin: 0;
      display: flex;
      margin-left: auto;
      font-size: 0.875rem;

      li {
        color: var(--inverseTextColor);
        font-weight: 600;
        transition: .3s all;
        cursor: pointer;

        &:hover {
          color: var(--linkTextColor);
        }
        
        &:not(:first-child) {
          margin-left: 2rem;
        }
      }
    }
  }

  &__menu {
    height: 72px;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    background: var(--headerBgColor);

    &-logo {
      max-width: none;
      max-height: none;
      margin-right: 0.875rem;
    }

    &-content {
      padding: 0;
      margin: 0;
      list-style-type: none;
      height: 100%;
      display: flex;
      align-items: center;
      flex: 1;
      
      li {
        font-size: 1rem;
        font-weight: 500;
        cursor: pointer;
      }

      li:not(:nth-child(5), :last-child) {
        padding: 0 1rem;
        color: var(--darkSub);
        line-height: 100%;
      }

      li:nth-child(5) {
        color: var(--linkTextColor);
        font-weight: 600;
        margin-left: auto;
        font-size: 0.938rem;
      }

      li:last-child {
        padding: 0.5rem 1rem;
        border-radius: 5px;
        color: var(--inverseTextColor);
        background-color: var(--primaryButtonBgColor);
        font-size: 0.875rem;
        margin-left: 1.5rem;
      }
    }
  }
}


@media (max-width: 1240px) {
  .header {
    &__promotion, &__menu {
      padding: 0 1.5rem 0 1rem;
    }
  }
}
</style>
