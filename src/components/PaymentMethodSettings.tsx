import React from 'react';
import { SettingsDetailCard } from './SettingsDetailCard';

export const PaymentMethodSettings: React.FC = () => (
  <SettingsDetailCard id="paymentSystem" title="Payment Method">
    <div className="payment-method mb-0">
      <div className="payment-method__wrapper arrow-sm">
        <div className="payment-method__item">
          <input className="form-check-input" type="radio" name="payment" id="payment1" hidden />
          <label className="form-check-label" htmlFor="payment1">
            <img src="assets/images/thumbs/payment-method1.png" alt="" />
          </label>
        </div>
        <div className="payment-method__item">
          <input className="form-check-input" type="radio" name="payment" id="payment2" hidden defaultChecked />
          <label className="form-check-label" htmlFor="payment2">
            <img src="assets/images/thumbs/payment-method2.png" alt="" />
          </label>
        </div>
        <div className="payment-method__item">
          <input className="form-check-input" type="radio" name="payment" id="payment3" hidden />
          <label className="form-check-label" htmlFor="payment3">
            <img src="assets/images/thumbs/payment-method3.png" alt="" />
          </label>
        </div>
        <div className="payment-method__item">
          <input className="form-check-input" type="radio" name="payment" id="payment4" hidden />
          <label className="form-check-label" htmlFor="payment4">
            <img src="assets/images/thumbs/payment-method4.png" alt="" />
          </label>
        </div>
        <div className="payment-method__item">
          <input className="form-check-input" type="radio" name="payment" id="payment5" hidden />
          <label className="form-check-label" htmlFor="payment5">
            <img src="assets/images/thumbs/payment-method5.png" alt="" />
          </label>
        </div>
        <div className="payment-method__item">
          <input className="form-check-input" type="radio" name="payment" id="payment6" hidden />
          <label className="form-check-label" htmlFor="payment6">
            <img src="assets/images/thumbs/payment-method6.png" alt="" />
          </label>
        </div>
        <div className="payment-method__item">
          <input className="form-check-input" type="radio" name="payment" id="payment7" hidden />
          <label className="form-check-label" htmlFor="payment7">
            <img src="assets/images/thumbs/payment-method7.png" alt="" />
          </label>
        </div>
        <div className="payment-method__item">
          <input className="form-check-input" type="radio" name="payment" id="payment8" hidden />
          <label className="form-check-label" htmlFor="payment8">
            <img src="assets/images/thumbs/payment-method8.png" alt="" />
          </label>
        </div>
        <div className="payment-method__item">
          <input className="form-check-input" type="radio" name="payment" id="payment9" hidden />
          <label className="form-check-label" htmlFor="payment9">
            <img src="assets/images/thumbs/payment-method9.png" alt="" />
          </label>
        </div>
        <div className="payment-method__item">
          <input className="form-check-input" type="radio" name="payment" id="payment10" hidden />
          <label className="form-check-label" htmlFor="payment10">
            <img src="assets/images/thumbs/payment-method10.png" alt="" />
          </label>
        </div>
        <div className="payment-method__item">
          <input className="form-check-input" type="radio" name="payment" id="payment11" hidden />
          <label className="form-check-label" htmlFor="payment11">
            <img src="assets/images/thumbs/payment-method11.png" alt="" />
          </label>
        </div>
        <div className="payment-method__item">
          <input className="form-check-input" type="radio" name="payment" id="payment12" hidden />
          <label className="form-check-label" htmlFor="payment12">
            <img src="assets/images/thumbs/payment-method12.png" alt="" />
          </label>
        </div>
        <div className="payment-method__item">
          <input className="form-check-input" type="radio" name="payment" id="payment13" hidden />
          <label className="form-check-label" htmlFor="payment13">
            <img src="assets/images/thumbs/payment-method13.png" alt="" />
          </label>
        </div>
      </div>
    </div>
  </SettingsDetailCard>
);
