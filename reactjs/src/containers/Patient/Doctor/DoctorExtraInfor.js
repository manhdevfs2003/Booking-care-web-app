import React, { Component } from "react";
import { connect } from "react-redux";
import "./DoctorExtraInfor.scss";
import { LANGUAGES } from "../../../utils";
import { FormattedMessage } from "react-intl";
import { getExtraInforDoctorById } from "../../../services/userService";
import NumberFormat from "react-number-format";

class DoctorExtraInfor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShơwDetailInfor: false,
      isShơwDetailInsurance: false,
      extraInfor: {},
    };
  }
  async componentDidMount() {
    if (this.props.doctorIdFromParent) {
      let res = await getExtraInforDoctorById(this.props.doctorIdFromParent);
      if (res && res.errCode === 0) {
        this.setState({
          extraInfor: res.data,
        });
      }
    }
  }

  async componentDidUpdate(prevProps, preState, snapshot) {
    if (this.props.language !== prevProps.language) {
    }
    if (this.props.doctorIdFromParent !== prevProps.doctorIdFromParent) {
      let res = await getExtraInforDoctorById(this.props.doctorIdFromParent);
      if (res && res.errCode === 0) {
        this.setState({
          extraInfor: res.data,
        });
      }
    }
  }
  showHideDetailInfor = (status) => {
    this.setState({
      isShơwDetailInfor: status,
    });
  };
  showHideDetailInsurance = (status) => {
    this.setState({
      isShơwDetailInsurance: status,
    });
  };
  render() {
    let { isShơwDetailInfor, isShơwDetailInsurance, extraInfor } = this.state;
    let { language } = this.props;
    return (
      <>
        <div className="doctor-extra-infor-container">
          <div className="content-up">
            <div className="text-address">
              <FormattedMessage id="patient.extra-infor-doctor.text-address"></FormattedMessage>
              <div className="address-clinic"> {extraInfor && extraInfor.clinicData ? extraInfor.clinicData.address : ""}</div>
            </div>
            <div className="name-clinic">{extraInfor && extraInfor.nameClinic ? extraInfor.nameClinic : ""}</div>
            <div className="detail-address">{extraInfor && extraInfor.addressClinic ? extraInfor.addressClinic : ""}</div>
          </div>
          <div className="content-down">
            {isShơwDetailInfor === false && (
              <div className="short-infor">
                <FormattedMessage id="patient.extra-infor-doctor.price"></FormattedMessage>
                {extraInfor && extraInfor.priceTypeData && language === LANGUAGES.VI && <NumberFormat className="currency" value={extraInfor.priceTypeData.valueVi} displayType="text" thousandSeparator={true} suffix={" vnđ"} />}
                {extraInfor && extraInfor.priceTypeData && language === LANGUAGES.EN && <NumberFormat className="currency" value={extraInfor.priceTypeData.valueEn} displayType="text" thousandSeparator={true} suffix={"$"} />}
                <span className="detail" onClick={() => this.showHideDetailInfor(true)}>
                  <FormattedMessage id="patient.extra-infor-doctor.detail"></FormattedMessage>
                </span>
              </div>
            )}
            {isShơwDetailInfor === true && (
              <>
                <div className="title-price">
                  <FormattedMessage id="patient.extra-infor-doctor.text-address"></FormattedMessage>
                </div>
                <div className="detail-infor">
                  <div className="price">
                    <span className="left">
                      <FormattedMessage id="patient.extra-infor-doctor.price"></FormattedMessage>
                    </span>
                    <span className="right">
                      {extraInfor && extraInfor.priceTypeData && language === LANGUAGES.VI && <NumberFormat className="currency" value={extraInfor.priceTypeData.valueVi} displayType="text" thousandSeparator={true} suffix={" vnđ"} />}
                      {extraInfor && extraInfor.priceTypeData && language === LANGUAGES.EN && <NumberFormat className="currency" value={extraInfor.priceTypeData.valueEn} displayType="text" thousandSeparator={true} suffix={"$"} />}
                    </span>
                  </div>
                  <div className="note">{extraInfor && extraInfor.note ? extraInfor.note : ""}</div>
                </div>

                <div className="payment">
                  <FormattedMessage id="patient.extra-infor-doctor.payment"> </FormattedMessage>
                  {extraInfor && extraInfor.paymentTypeData && language === LANGUAGES.VI ? extraInfor.paymentTypeData.valueVi : ""}
                  {extraInfor && extraInfor.paymentTypeData && language === LANGUAGES.EN ? extraInfor.paymentTypeData.valueEn : ""}
                </div>
                <div className="hide-price">
                  <span onClick={() => this.showHideDetailInfor(false)}>
                    <FormattedMessage id="patient.extra-infor-doctor.hide-price"></FormattedMessage>
                  </span>
                </div>
              </>
            )}
          </div>
          <div className="content-insurance">
            {isShơwDetailInsurance === false && (
              <>
                <div className="title-insurance">
                  <FormattedMessage id="patient.extra-infor-doctor.insurance-title"></FormattedMessage>
                  <span onClick={() => this.showHideDetailInsurance(true)}>
                    <FormattedMessage id="patient.extra-infor-doctor.detail"></FormattedMessage>
                  </span>
                </div>
              </>
            )}

            {isShơwDetailInsurance === true && (
              <>
                <div className="info-insurance">
                  <FormattedMessage id="patient.extra-infor-doctor.content-insurance"></FormattedMessage>
                </div>
                <div className="hide-insurance">
                  <span onClick={() => this.showHideDetailInsurance(false)}>
                    <FormattedMessage id="patient.extra-infor-doctor.hide-insurance"></FormattedMessage>
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorExtraInfor);
