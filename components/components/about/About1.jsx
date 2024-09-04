"use client";
import Link from "next/link";
import CountUp from "react-countup";

const About1 = () => {
  return (
    <>
      <div className="home1-about-section mb-120">
        <img
          src="/assets/img/home1/section-vector1.png"
          alt=""
          className="section-vector1"
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-title mb-40">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={15}
                      height={16}
                      viewBox="0 0 15 16"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.92556 7.69046C2.35744 7.63298 2.78906 7.57563 3.21925 7.51077C4.14925 7.37065 5.08588 7.29138 6.01763 7.21249L6.01888 7.21243C6.15888 7.20055 6.29875 7.18874 6.43844 7.17668C7.50663 6.968 8.58732 6.89083 9.66644 6.94628C10.7733 7.06837 11.8592 7.41421 12.8857 7.97163L12.8857 8.23655C11.8592 8.79397 10.7733 9.13981 9.66644 9.26191C8.58732 9.31735 7.50663 9.24018 6.43844 9.03151C5.36831 8.93932 4.29813 8.82412 3.21925 8.69742C2.14031 8.57065 1.07012 8.42092 -6.78702e-07 8.23655L-7.01862e-07 7.97163C0.639938 7.86135 1.28306 7.77588 1.92556 7.69046ZM10.7633 15.8502C10.9332 15.4596 11.12 15.0855 11.3061 14.7127C11.389 14.5468 11.4717 14.3811 11.5527 14.2144C11.8159 13.6729 12.1141 13.1545 12.4299 12.6477C12.5448 12.4632 12.64 12.2604 12.7336 12.061C12.8972 11.7124 13.056 11.3741 13.3071 11.1616C13.7816 10.7768 14.3283 10.5734 14.886 10.574L15 10.7353C14.9945 11.4677 14.8235 12.1813 14.5088 12.7859C14.3311 13.1802 14.0336 13.4059 13.7358 13.6317C13.6073 13.7292 13.4787 13.8268 13.3597 13.9379C12.965 14.3066 12.5615 14.6637 12.1492 15.0093C11.7369 15.3549 11.3159 15.689 10.8685 16L10.7633 15.8502ZM11.7543 0.665536C11.4882 0.436859 11.2226 0.208798 10.9388 -1.5523e-06L10.816 0.149784C11.0528 0.725784 11.3072 1.27877 11.5703 1.82018C11.8335 2.3616 12.1142 2.89157 12.3949 3.40997C12.4795 3.56628 12.5538 3.73514 12.628 3.90394C12.8 4.29501 12.9718 4.68572 13.2721 4.91908C13.7312 5.33563 14.2754 5.56049 14.8334 5.56418L14.9562 5.4144C14.9651 4.68055 14.8095 3.95951 14.5089 3.3408C14.3471 3.01108 14.0894 2.80252 13.824 2.58763C13.6722 2.46474 13.5178 2.33975 13.3773 2.1888C12.9914 1.77409 12.6142 1.3824 12.1931 1.0368C12.0446 0.91489 11.8994 0.790152 11.7543 0.665536Z"
                      />
                    </svg>
                    About Us
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={15}
                      height={16}
                      viewBox="0 0 15 16"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.0744 8.30954C12.6426 8.36702 12.2109 8.42437 11.7807 8.48923C10.8507 8.62935 9.91412 8.70862 8.98237 8.78751L8.98112 8.78757C8.84112 8.79945 8.70125 8.81126 8.56156 8.82332C7.49337 9.032 6.41268 9.10917 5.33356 9.05372C4.22669 8.93163 3.14081 8.58578 2.11432 8.02837V7.76345C3.14081 7.20603 4.22669 6.86018 5.33356 6.73809C6.41268 6.68265 7.49337 6.75982 8.56156 6.96849C9.63169 7.06068 10.7019 7.17588 11.7807 7.30259C12.8597 7.42935 13.9299 7.57908 15 7.76345V8.02837C14.3601 8.13865 13.7169 8.22412 13.0744 8.30954ZM4.23673 0.14976C4.06677 0.540388 3.88 0.914468 3.69388 1.28726C3.61104 1.45317 3.52831 1.61887 3.44728 1.78561C3.18413 2.32705 2.88589 2.84546 2.57011 3.35234C2.45519 3.5368 2.36002 3.73958 2.26642 3.939C2.10282 4.28757 1.94402 4.62593 1.69294 4.83843C1.21844 5.2232 0.671682 5.42665 0.114031 5.42597L0 5.26468C0.00551875 4.53235 0.176481 3.81866 0.491219 3.2141C0.6689 2.81982 0.966407 2.59414 1.26418 2.36828C1.39271 2.27078 1.52129 2.17324 1.64031 2.06209C2.03504 1.69345 2.43853 1.33633 2.8508 0.990726C3.26307 0.645126 3.68411 0.31104 4.13147 0L4.23673 0.14976ZM3.24568 15.3345C3.51184 15.5631 3.77735 15.7912 4.06123 16L4.18404 15.8502C3.9472 15.2742 3.69281 14.7212 3.42966 14.1798C3.16651 13.6384 2.88581 13.1084 2.60511 12.59C2.52048 12.4337 2.44621 12.2649 2.37198 12.0961C2.19999 11.705 2.02816 11.3143 1.72794 11.0809C1.26879 10.6644 0.7246 10.4395 0.166563 10.4358L0.0437562 10.5856C0.0348937 11.3194 0.190456 12.0405 0.491113 12.6592C0.652919 12.9889 0.910556 13.1975 1.17597 13.4124C1.32782 13.5353 1.48222 13.6602 1.62268 13.8112C2.00863 14.2259 2.38582 14.6176 2.80686 14.9632C2.95538 15.0851 3.10063 15.2098 3.24568 15.3345Z"
                      />
                    </svg>
                  </span>
                  <h2>Let’s know About Our Journey For TripRex.</h2>
                </div>
                <ul className="nav nav-pills" id="pills-tab3" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="mission-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#mission"
                      type="button"
                      role="tab"
                      aria-controls="mission"
                      aria-selected="true"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={30}
                        height={30}
                        viewBox="0 0 30 30"
                      >
                        <g clipPath="url(#clip0_922_21)">
                          <path d="M15.0504 10.4663C15.4633 10.4663 15.7977 10.1317 15.7977 9.71899C15.7977 9.30631 15.4633 8.97168 15.0504 8.97168C11.7488 8.97168 9.07227 11.6482 9.07227 14.9501C9.07227 18.2517 11.7488 20.9283 15.0504 20.9283C18.3523 20.9283 21.0288 18.2517 21.0288 14.9501C21.0288 14.5372 20.6942 14.2028 20.2815 14.2028C19.8689 14.2028 19.5342 14.5372 19.5342 14.9501C19.5342 17.4263 17.5269 19.4339 15.0504 19.4339C12.5742 19.4339 10.5666 17.4263 10.5666 14.9501C10.5666 12.4736 12.5742 10.4663 15.0504 10.4663Z" />
                          <path d="M29.3085 10.5114C29.1787 10.1193 28.7558 9.90672 28.3634 10.0365C27.9803 10.1632 27.7669 10.5711 27.8812 10.9581C30.1159 18.0748 26.1586 25.6555 19.042 27.8903C11.9256 30.1251 4.34482 26.1678 2.11006 19.0512C-0.124991 11.9346 3.8326 4.35381 10.949 2.11899C13.5832 1.29181 16.4077 1.29181 19.042 2.11899C19.4375 2.23822 19.8547 2.0144 19.974 1.61889C20.0915 1.2293 19.8761 0.817563 19.489 0.691704C11.5869 -1.78757 3.1709 2.60859 0.691687 10.5109C-1.78759 18.4131 2.60875 26.829 10.5109 29.3082C18.4133 31.7875 26.829 27.3914 29.3082 19.489C30.2251 16.5667 30.2252 13.4338 29.3085 10.5114H29.3085Z" />
                          <path d="M16.473 5.33889C16.4769 4.91338 16.1501 4.55772 15.7257 4.5259C15.5026 4.50691 15.2792 4.48793 15.05 4.48793C9.27193 4.48793 4.58789 9.17197 4.58789 14.9501C4.58789 20.728 9.27193 25.4121 15.05 25.4121C20.828 25.4121 25.512 20.728 25.512 14.9501C25.512 14.6798 25.4955 14.4097 25.4624 14.1415C25.4026 13.7313 25.0218 13.4473 24.6116 13.507C24.2014 13.5665 23.9174 13.9477 23.9769 14.3578C23.9792 14.3733 23.982 14.3886 23.9851 14.4042C24.0014 14.5853 24.0174 14.7647 24.0174 14.9497C24.0176 19.9024 20.0029 23.9172 15.0503 23.9177C10.0975 23.9179 6.08268 19.9028 6.0825 14.9503C6.08227 9.99779 10.0968 5.98272 15.0496 5.98254H15.0498C15.2353 5.98254 15.4148 5.99854 15.5955 6.01453L15.7355 6.02625C16.1261 6.04295 16.4561 5.7399 16.4726 5.34943C16.4728 5.34574 16.4728 5.34234 16.473 5.33889Z" />
                          <path d="M19.5332 6.72978V9.40957L14.5211 14.4216C14.2242 14.7084 14.216 15.1815 14.5028 15.4784C14.7896 15.7752 15.2628 15.7835 15.5595 15.4967C15.5657 15.4907 15.5719 15.4846 15.5779 15.4784L20.59 10.4663H23.2696C23.4679 10.4663 23.6578 10.3876 23.7982 10.2473L28.2818 5.76345C28.5735 5.47166 28.5735 4.99857 28.2818 4.70672C28.2124 4.63734 28.13 4.58232 28.0394 4.54478C27.9487 4.50724 27.8516 4.48792 27.7535 4.48793H25.5116V2.24601C25.5116 1.83334 25.177 1.49871 24.764 1.49894C24.566 1.49899 24.3761 1.57769 24.236 1.71773L19.7522 6.20156C19.6828 6.27088 19.6277 6.35322 19.5901 6.44386C19.5525 6.5345 19.5332 6.63166 19.5332 6.72978ZM21.0278 7.03927L24.0169 4.05006V5.23523C24.0169 5.64791 24.3516 5.98254 24.7643 5.98254H25.9494L22.9602 8.9717H21.0278V7.03927Z" />
                        </g>
                      </svg>
                      Mission &amp; Vision
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="focus-customer-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#focus-customer"
                      type="button"
                      role="tab"
                      aria-controls="focus-customer"
                      aria-selected="false"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={30}
                        height={30}
                        viewBox="0 0 30 30"
                      >
                        <g>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M27.1678 14.488C27.0324 14.5109 26.9115 14.5866 26.8319 14.6985C26.7522 14.8104 26.7203 14.9493 26.7431 15.0848C26.855 15.7479 26.9119 16.4161 26.9119 17.0709C26.9119 20.7219 25.2854 24.0176 22.6621 26.2119C22.4434 24.7755 21.823 23.4301 20.8725 22.3311C19.922 21.2321 18.6801 20.4243 17.2902 20.0008C17.8591 19.6233 18.3259 19.1109 18.6489 18.5094C18.9719 17.9078 19.1412 17.2357 19.1416 16.5529C19.1416 14.2674 17.2829 12.4087 14.9974 12.4087C12.7119 12.4087 10.8533 14.2674 10.8533 16.5529C10.8533 17.9909 11.5899 19.257 12.7047 20.0008C11.3147 20.4243 10.0728 21.2321 9.12233 22.3311C8.17182 23.4301 7.55144 24.7755 7.33277 26.2119C5.99752 25.093 4.92468 23.6942 4.19025 22.1145C3.45582 20.5348 3.07778 18.813 3.08292 17.0709C3.08292 16.4161 3.1399 15.7489 3.25179 15.0848C3.26427 15.0172 3.26317 14.9479 3.24857 14.8807C3.23397 14.8136 3.20616 14.75 3.16676 14.6937C3.12735 14.6374 3.07714 14.5895 3.01905 14.5528C2.96096 14.5161 2.89614 14.4913 2.82838 14.4799C2.76062 14.4685 2.69127 14.4707 2.62436 14.4864C2.55745 14.502 2.49433 14.5308 2.43866 14.5711C2.383 14.6114 2.33591 14.6624 2.30013 14.721C2.26435 14.7797 2.24059 14.8449 2.23025 14.9128C2.10926 15.6258 2.04792 16.3477 2.04688 17.0709C2.04688 23.4322 6.59097 28.802 12.8507 29.8381C12.9839 29.8553 13.1185 29.8202 13.2262 29.7401C13.334 29.66 13.4064 29.5413 13.4283 29.4088C13.4502 29.2764 13.4198 29.1406 13.3436 29.0301C13.2674 28.9196 13.1512 28.8431 13.0196 28.8165C11.327 28.5369 9.71521 27.8936 8.29526 26.9309C8.54287 23.4156 11.4334 20.6971 14.9974 20.6971C18.5614 20.6971 21.4509 23.4156 21.7006 26.9309C20.2804 27.8938 18.6682 28.5371 16.9752 28.8165C16.9063 28.8255 16.8398 28.8482 16.7798 28.8834C16.7198 28.9185 16.6674 28.9654 16.6259 29.0213C16.5845 29.0771 16.5546 29.1407 16.5383 29.2083C16.5219 29.2759 16.5193 29.3461 16.5306 29.4148C16.542 29.4834 16.567 29.549 16.6043 29.6078C16.6416 29.6665 16.6903 29.7171 16.7475 29.7566C16.8048 29.7962 16.8694 29.8237 16.9375 29.8377C17.0057 29.8517 17.0759 29.8518 17.1441 29.8381C23.4039 28.802 27.948 23.4332 27.948 17.0709C27.948 16.3581 27.8858 15.6318 27.7646 14.9128C27.7536 14.8456 27.7293 14.7813 27.6933 14.7235C27.6573 14.6657 27.6102 14.6156 27.5547 14.5762C27.4992 14.5367 27.4365 14.5086 27.3701 14.4934C27.3037 14.4783 27.2349 14.4765 27.1678 14.488ZM11.8893 16.5529C11.8893 14.8393 13.2838 13.4447 14.9974 13.4447C16.711 13.4447 18.1056 14.8393 18.1056 16.5529C18.1056 18.2665 16.711 19.661 14.9974 19.661C13.2838 19.661 11.8893 18.2665 11.8893 16.5529ZM20.6708 4.09859C20.641 4.00647 20.586 3.92455 20.512 3.8621C20.4381 3.79966 20.3481 3.75919 20.2522 3.7453L16.9421 3.26458L15.4616 0.264191C15.2875 -0.0880638 14.7073 -0.0880638 14.5333 0.264191L13.0528 3.26458L9.74261 3.7453C9.64693 3.75919 9.55705 3.79959 9.48314 3.86191C9.40922 3.92423 9.35422 4.00599 9.32436 4.09795C9.2945 4.1899 9.29097 4.28838 9.31417 4.38224C9.33737 4.4761 9.38637 4.56159 9.45563 4.62905L11.851 6.96325L11.2853 10.2599C11.2689 10.3553 11.2795 10.4533 11.316 10.5429C11.3524 10.6325 11.4132 10.7101 11.4915 10.7669C11.5698 10.8238 11.6624 10.8575 11.7589 10.8644C11.8554 10.8713 11.9519 10.8511 12.0375 10.8059L14.9974 9.24877L17.9574 10.8059C18.0428 10.8517 18.1395 10.8724 18.2361 10.8654C18.3328 10.8584 18.4255 10.8242 18.5034 10.7666C18.5818 10.7097 18.6427 10.632 18.6791 10.5422C18.7155 10.4525 18.7261 10.3543 18.7096 10.2589L18.1439 6.96429L20.5403 4.62801C20.6095 4.56064 20.6585 4.47528 20.6817 4.38155C20.705 4.28781 20.7015 4.18945 20.6718 4.09756L20.6708 4.09859ZM17.2249 6.41001C17.1647 6.46871 17.1197 6.54115 17.0937 6.6211C17.0678 6.70104 17.0616 6.78611 17.0757 6.86897L17.5109 9.40003L15.2378 8.20444C15.1633 8.16558 15.0804 8.14529 14.9964 8.14529C14.9123 8.14529 14.8295 8.16558 14.755 8.20444L12.483 9.40003L12.9171 6.86897C12.9312 6.78611 12.925 6.70104 12.899 6.6211C12.8731 6.54115 12.828 6.46871 12.7679 6.41001L10.9299 4.61869L13.4703 4.24985C13.5532 4.23767 13.632 4.20558 13.6998 4.15633C13.7677 4.10707 13.8226 4.04211 13.8599 3.96701L14.9974 1.66492L16.134 3.96805C16.1712 4.04315 16.2261 4.10811 16.294 4.15736C16.3618 4.20662 16.4406 4.23871 16.5235 4.25089L19.0639 4.61972L17.226 6.41104L17.2249 6.41001Z"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M2.60313 12.4325C2.5865 12.5279 2.59696 12.6261 2.63331 12.7159C2.66966 12.8056 2.73045 12.8834 2.80877 12.9404C2.8871 12.9973 2.97983 13.0312 3.07643 13.0381C3.17303 13.0451 3.26964 13.0248 3.35529 12.9795L5.675 11.7591L7.99574 12.9795C8.08101 13.0251 8.17746 13.0456 8.27391 13.0387C8.37036 13.0317 8.46286 12.9975 8.54069 12.9402C8.61908 12.8833 8.67995 12.8056 8.7164 12.7158C8.75284 12.6261 8.7634 12.5279 8.74687 12.4325L8.30344 9.84965L10.1808 8.02103C10.2503 7.95362 10.2996 7.86805 10.323 7.77404C10.3463 7.68003 10.3429 7.58135 10.313 7.4892C10.2831 7.39706 10.228 7.31514 10.1539 7.25275C10.0798 7.19036 9.98966 7.15 9.89377 7.13625L7.29951 6.76017L6.13914 4.40835C5.96509 4.05609 5.3849 4.05609 5.21085 4.40835L4.05048 6.76017L1.45622 7.13625C1.36033 7.15 1.27022 7.19036 1.19611 7.25275C1.12201 7.31514 1.06688 7.39706 1.03699 7.4892C1.0071 7.58135 1.00365 7.68003 1.02703 7.77404C1.05041 7.86805 1.09967 7.95362 1.16924 8.02103L3.04655 9.84965L2.60313 12.4325ZM2.64457 8.01171L4.468 7.74648C4.55114 7.73446 4.63011 7.70244 4.69814 7.65318C4.76617 7.60391 4.82123 7.53887 4.85859 7.46364L5.675 5.80908L6.4914 7.46364C6.52866 7.53874 6.58356 7.6037 6.6514 7.65295C6.71924 7.70221 6.798 7.7343 6.88095 7.74648L8.70543 8.01171L7.38551 9.29744C7.32533 9.35614 7.28031 9.42858 7.25432 9.50853C7.22834 9.58848 7.22216 9.67354 7.23631 9.75641L7.54816 11.5736L5.91639 10.7158C5.84186 10.6769 5.75905 10.6566 5.675 10.6566C5.59094 10.6566 5.50813 10.6769 5.4336 10.7158L3.80183 11.5736L4.11264 9.75641C4.12693 9.67363 4.12091 9.58861 4.09511 9.50867C4.0693 9.42873 4.02448 9.35624 3.96449 9.29744L2.64457 8.01171ZM28.5426 7.13625L25.9483 6.76017L24.7879 4.40835C24.6139 4.05609 24.0337 4.05609 23.8596 4.40835L22.6993 6.76017L20.105 7.13625C20.0091 7.15 19.919 7.19036 19.8449 7.25275C19.7708 7.31514 19.7157 7.39706 19.6858 7.4892C19.6559 7.58135 19.6524 7.68003 19.6758 7.77404C19.6992 7.86805 19.7485 7.95362 19.818 8.02103L21.6953 9.84965L21.2519 12.4325C21.2353 12.5279 21.2458 12.6261 21.2821 12.7159C21.3185 12.8056 21.3792 12.8834 21.4576 12.9404C21.5359 12.9973 21.6286 13.0312 21.7252 13.0381C21.8218 13.0451 21.9184 13.0248 22.0041 12.9795L24.3238 11.7591L26.6445 12.9795C26.7298 13.0251 26.8263 13.0456 26.9227 13.0387C27.0192 13.0317 27.1117 12.9975 27.1895 12.9402C27.2679 12.8833 27.3288 12.8056 27.3652 12.7158C27.4016 12.6261 27.4122 12.5279 27.3957 12.4325L26.9522 9.84965L28.8295 8.02103C28.8991 7.95362 28.9484 7.86805 28.9718 7.77404C28.9951 7.68003 28.9917 7.58135 28.9618 7.4892C28.9319 7.39706 28.8768 7.31514 28.8027 7.25275C28.7286 7.19036 28.6385 7.15 28.5426 7.13625ZM26.0343 9.29744C25.9741 9.35614 25.9291 9.42858 25.9031 9.50853C25.8771 9.58848 25.871 9.67354 25.8851 9.75641L26.197 11.5736L24.5652 10.7158C24.4907 10.6769 24.4078 10.6566 24.3238 10.6566C24.2397 10.6566 24.1569 10.6769 24.0824 10.7158L22.4506 11.5736L22.7614 9.75641C22.7757 9.67363 22.7697 9.58861 22.7439 9.50867C22.7181 9.42873 22.6733 9.35624 22.6133 9.29744L21.2934 8.01171L23.1168 7.74648C23.1999 7.73446 23.2789 7.70244 23.3469 7.65318C23.415 7.60391 23.47 7.53887 23.5074 7.46364L24.3238 5.80908L25.1402 7.46364C25.1775 7.53874 25.2324 7.6037 25.3002 7.65295C25.368 7.70221 25.4468 7.7343 25.5297 7.74648L27.3542 8.01171L26.0343 9.29744Z"
                          />
                          <path d="M15.0004 30.0215C15.2865 30.0215 15.5185 29.7896 15.5185 29.5035C15.5185 29.2174 15.2865 28.9855 15.0004 28.9855C14.7143 28.9855 14.4824 29.2174 14.4824 29.5035C14.4824 29.7896 14.7143 30.0215 15.0004 30.0215Z" />
                        </g>
                      </svg>
                      Focus On Customer
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tab3Content">
                  <div
                    className="tab-pane fade show active"
                    id="mission"
                    role="tabpanel"
                  >
                    Etiam ac tortor id purus commodo vulputate. Vestibulum
                    porttitor erat felis and sed vehicula tortor malesuada
                    gravida. Mauris volutpat enim quis pulv gont congue.
                    Suspendisse ullamcorper, enim vitae tristique blandit,
                    eratot augue torel tempo libero, non porta lectus tortor et
                    elit. Quisque finibusot enim et eratourgt gravida, eu
                    elementum turpis lacinia. Integer female go tellus ligula,
                    attendora and condimentum.
                  </div>
                  <div
                    className="tab-pane fade"
                    id="focus-customer"
                    role="tabpanel"
                  >
                    Etiam ac tortor id purus commodo vulputate. Vestibulum
                    porttitor erat felis and sed vehicula tortor malesuada
                    gravida. Mauris volutpat enim quis pulv gont congue.
                    Suspendisse ullamcorper, enim vitae tristique blandit,
                    eratot augue torel tempo libero, non porta lectus tortor et
                    elit. Quisque finibusot enim et eratourgt gravida, eu
                    elementum turpis lacinia. Integer female go tellus ligula,
                    attendora and condimentum.
                  </div>
                </div>
                <div className="about-content-bottom">
                  <Link href="/about" className="primary-btn1">
                    More About
                  </Link>
                  <div className="counter-area">
                    <div className="customer-img-grp">
                      <img src="/assets/img/home1/customer-img-grp.png" alt="" />
                    </div>
                    <div className="content">
                      <div className="number">
                        <h6 className="counter">
                          <CountUp delay={2} end={500} />
                        </h6>
                        <span>+</span>
                      </div>
                      <p>Customer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-end">
              <div className="about-img">
                <img src="/assets/img/home1/about-img.png" alt="" />
                <img
                  src="/assets/img/home1//vector/about-img-bg-vector.svg"
                  alt=""
                  className="vector"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About1;
