<script setup lang="ts">

import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import { createBlocks } from '@/service/blockService'

const schema = yup.object({
  percent: yup.number().required(),
  description: yup.string().required(),
});

async function onSubmit(values) {
  try {
    await createBlocks(values)
    console.log('hihi');
    
  } catch (error) {
    console.log('error: ', error.response);
    
  }
}

</script>

<template>
  <div class="home-second-section">
    <div class="container display-flex flex-direction-column align-items-center">
      <div class="home-second-section__rating">
        <div>
          <img class="" src="@/assets/images/rating.webp" alt="Rating">
        </div>
      </div>
      <h1 class="home-second-section__title">“Nitro PDF Pro is one of the most full-featured PDF editors available and the strongest alternative to Adobe Acrobat DC.”</h1>
      <p class="home-second-section__sub-title">PCWorld</p>
    </div>
    <div class="container display-flex flex-direction-column align-items-center">
      <div class="home-second-section__plan-pricing display-grid">
        <div class="home-second-section__plan-pricing-left display-grid">
          <h2>Find the right Nitro plan for your needs</h2>
          <p>From single-user tiers to full enterprise solutions, Nitro offers a range of plans with both subscription and one-time purchases available.</p>
          <button>See all plans & pricing</button>
        </div>
        <div class="home-second-section__plan-pricing-right">
          <div>
            <img src="@/assets/images/how-to-use.gif" alt="How To Use">
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="home-second-section__package display-grid">
        <div class="home-second-section__package-item display-flex flex-direction-column">
          <div class="display-flex">
            <img src="@/assets/icons/nitro-pro.svg" alt="Nitro Pro">
            <span>Nitro PDF Pro</span>
          </div>
          <p>Secure PDF software with edit, convert, combine, encryption, OCR and more easy-to-use features.</p>
          <a href="javascript:void(0)">Explore Nitro FDF Pro</a>
        </div>
        <div class="home-second-section__package-item display-flex flex-direction-column">
          <div class="display-flex">
            <img src="@/assets/icons/nitro-sign.svg" alt="Nitro Sign">
            <span>Nitro Sign</span>
          </div>
          <p>High-trust, compliant eSign software with integrated identity check, audit trails, and multi-device sign.</p>
          <a href="javascript:void(0)">Explore Nitro Sign</a>
        </div>
        <div class="home-second-section__package-item display-flex flex-direction-column">
          <div class="display-flex">
            <img src="@/assets/icons/nitro-pro-business.svg" alt="Nitro Pro Business">
            <span>Nitro Pro Business</span>
          </div>
          <p>PDF + eSign for business with real-time analytics and software integrations.</p>
          <a href="javascript:void(0)">Explore Nitro Pro Business</a>
        </div>
      </div>
      <div class="home-second-section__precents">
        <h2 class="home-second-section__precents-title">Customers around the world count on Nitro</h2>
        <div class="home-second-section__precents-blocks">
          <div class="home-second-section__precents-blocks-item">
            <h3>95%</h3>
            <p>Customer satisfaction rating</p>
          </div>
          <div class="home-second-section__precents-blocks-item">
            <h3>95%</h3>
            <p>Customer satisfaction rating</p>
          </div>
          <div class="home-second-section__precents-blocks-item">
            <h3>95%</h3>
            <p>Customer satisfaction rating</p>
          </div>
          <div class="home-second-section__precents-blocks-item">
            <h3>95%</h3>
            <p>Customer satisfaction rating</p>
          </div>
          <div class="home-second-section__precents-blocks-item">
            <h3>95%</h3>
            <p>Customer satisfaction rating</p>
          </div>
        </div>
        <Form :validation-schema="schema" @submit="onSubmit">
          <div class="display-flex">
            <label for="percent">Percent:</label>
            <Field name="percent" type="number" />
            <ErrorMessage name="percent" />
          </div>
          <div class="display-flex">
            <label for="description">Description:</label>
            <Field name="description" type="string" />
            <ErrorMessage name="description" />
          </div>
          <button>Submit</button>
        </Form>
      </div>
    </div>
  </div>
</template>

<style>
  :root {
    --moduleGradientColorStart: #ffffff;
    --moduleGradientColorEnd: #f7f8fc;
    --moduleGradientDirection: to top;
    --moduleBgOpacity: NaN;
    --boxBgOpacity: NaN;
    --buttonVisibility: none;
    --textAlignment: center;
    --primaryTextColor: #484861;
    --secondaryTextColor: #82839d;
  }
</style>

<style lang="scss" scoped>
  .home-second-section {
    padding: 2rem 5rem 0 5rem;

    &__rating {
      max-width: 638px;
      width: 100%;
      max-height: 83px;
      height :100%;
      padding-top: 4rem;

      div {
        position: relative;
        padding-top: calc((100% * 83) / 638);
        width: 100%;
        height: 100%;

        img {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          transform: translate(-50%, -50%);
          object-fit: cover;
          object-position: center;
        }
      }
    }

    &__title {
      font-size: 2.25rem;
      color: var(--primaryTextColor);
      font-weight: 500;
      text-align: center;
      max-width: 70%;
      padding-top: 2rem;
      margin: 0;
    }

    &__sub-title {
      color: var(--secondaryTextColor);
      font-size: 1.375rem;
      margin: 2rem 0 0 0;
    }

    &__plan-pricing {
      grid-template-columns: minmax(0,4fr) minmax(0,8fr);
      align-items: flex-end;
      grid-column-gap: 3.5rem;
      margin-top: 3rem;
      padding: 3rem 0;

      &-left {
        grid-auto-columns: 1fr;
        grid-row-gap: 1.5rem;
        padding-top: 5rem;

        h2 {
          font-size: 2.25rem;
          text-align: left;
          font-weight: 500;
          margin: 0;
        }

        p {
          font-size: 1.375rem;
          text-align: left;
          color: var(--darkSub);
          margin: 0;
        }

        button {
          border-color: var(--primaryButtonBorderColor);
          font-size: var(--description-3);
          background-color: var(--primaryButtonBgColor);
          border-radius: 6px;
          border-width: 1px;
          border-style: solid;
          color: var(--white);
          padding: 0.75rem 2rem;
          width: fit-content;
          font-weight: 500;
        }
      }

      &-right {
        width: 100%;
        /* max-height: 443px; */
        /* height: 100%; */

        >div {
          position: relative;
          padding-top: calc((100% * 443) / 787);

          img {
            position: absolute;
            width: 100%;
            height: 100%;
            transform: translate(-50%, -50%);
            top: 50%;
            left: 50%;
            object-fit: contain;
            object-position: center;
            box-shadow: 0 0.5rem 5rem #d6dff0;
          }
        }
      }
    }
    
    &__package {
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 40px;
      margin-top: 3.75rem;

      &-item {

        >div {

          img {
            width: 24px;
            height: 24px;
            margin-right: 8px;
          }

          span {
            font-size: 1.25rem;
            color: var(--secondaryButtonBgColor);
            font-weight: 600;
          }
        }

        p {
          color: var(--darkSub);
          font-size: var(--description-4);
          margin: 8px 0 30px 0;
          flex: 1;
        }

        a {
          color: var(--primaryColor);
          font-size: var(--description-4);
          font-weight: 600;
          text-decoration: none;
        }
      }
    }

    &__precents {
      text-align: center;
      margin-top: 5rem;

      &-title {
        font-size: var(--title-5);
        font-weight: 500;
        margin: 0 0 24px 0;
      }

      &-blocks {
        display: flex;
        flex-wrap: wrap;
        column-gap: 30px;
        row-gap: 30px;
        justify-content: center;

        &-item {
          padding: 2rem;
          background-color: #FFFFFF;
          border-radius: 4px;
          box-shadow: 0 1rem 1.25rem rgb(214, 223, 240, .5);
          cursor: pointer;
          transition: 0.5s;

          &:hover {
            -webkit-transform: translateY(-5px);
            transform: translateY(-5px);
          }

          h3 {
            font-size: var(--title-2-5);
            line-height: 1.25;
            font-weight: 500;
            letter-spacing: normal;
            text-transform: none;
            font-family: var(--bodyFont),Arial,Helvetica,sans-serif;
            margin: 0 0 0.5rem 0;
          }

          p {
            font-size: var(--description-1);
            line-height: 2rem;
            font-weight: 400;
            font-family: var(--bodyFont),Arial,Helvetica,sans-serif;
            color: var(--secondaryTextColor);
            margin: 0;
          }
        }
      }
    }
  }

  @media (max-width: 1240px) {
    .home-second-section {
      &__title {
        max-width: 100%
      }
    }
  }
</style>
