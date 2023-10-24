<template>
  <div class="home-first-section">
    <div class="container display-flex flex-direction-column align-items-center">
      <h1 class="home-first-section__title">
        Trusted PDF & eSign software for all industries
      </h1>
      <p class="home-first-section__sub-title">
        Secure, compliant, and affordable PDF & eSign solutions with integrated security for eSignatures.
      </p>
      <div class="home-first-section__button">
        <button>Get started free</button>
        <button>Plans & pricing</button>
      </div>
      <div class="home-first-section__media">
        <div>
          <img src="@/assets/images/home-banner.webp" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  :root {
    --moduleGradientColorStart: #ffffff;
    --moduleGradientColorEnd: #f7f7ff;
    --moduleGradientDirection: to bottom;
    --moduleBgOpacity: NaN;
    --boxBgOpacity: NaN;
    --moduleBgImage: url(@/assets/images/home-background.png);
  }
</style>

<style lang="scss" scoped>
  .home-first-section {
    padding: 5rem 5rem 0 5rem;
    background-image: linear-gradient(var(--moduleGradientColorStart),transparent 80%),var(--moduleBgImage);
    /* background-image: linear-gradient(red 10%, 30%, blue 90%); */
    background-position: 50%;
    background-size: cover;
    background-color: var(--moduleBgColor);
    background-repeat: no-repeat;

    &__title {
      font-size: 2.25rem;
      font-weight: 500;
      margin: 0;
    }

    &__sub-title {
      margin: 24px 0 0 0;
      color: var(--secondaryTextColor);
      font-size: 1.125rem;
    }

    &__button {
      margin-top: 2rem;

      button {
        padding: 0.75rem 2rem;
        font-size: 1rem;
        border-radius: 6px;
        font-weight: 600;
        line-height: 28px;
        border-width: 1px;
        cursor: pointer;
        transition: .3s all;

        &:first-child {
          border-color: var(--primaryButtonBorderColor);
          background-color: var(--primaryButtonBgColor);
          border-radius: 6px;
          border-width: 1px;
          border-style: solid;
          color: var(--inverseTextColor);

          &:hover {
            background-color: var(--primaryButtonHoverBgColor);
          }
        }

        &:last-child {
          background: var(--tertiaryButtonBgColor);
          border-color: var(--tertiaryButtonBorderColor);
          color: var(--tertiaryButtonTextColor);
          fill: var(--tertiaryButtonTextColor);
          margin-left: 1rem;

          &:hover {
            background-color: var(--tertiaryButtonHoverBgColor);
          }
        }
      }
    }

    &__media {
      width: 100%;
      margin-top: 3.5rem;

      >div {
        position: relative;
        padding-top: calc((100% * 440) / 1240);

        img {
          position: absolute;
          width: 100%;
          height: 100%;
          transform: translate(-50%, -50%);
          top: 50%;
          left: 50%;
          object-fit: cover;
          object-position: center;
        }
      }
    }
  }
</style>
