<template lang="pug">
  .loding-bader
      .title-box
          .items-box
              .lin-middle
              .lin-middle
          .items-box NEWSLTTER
          .items-box
              .lin-middle
              .lin-middle
      <!--.login-conent-->
        <!--.input-box-->
          <!--.title Already Member-->
          <!--.Login_Here Login Here-->
          <!--.line-->
          <!--text-file.input(-->
          <!--:isFocus="true"-->
          <!--v-bind:isUnderLine="true"-->
          <!--v-bind:underLinkCocor="'#ccc'"-->
          <!--v-bind:focusLinkClocor="'#d36f39'"-->
          <!--v-bind:input.sync="searchInfo.userName"-->
          <!--v-bind:name="'phone'"-->
          <!--v-bind:PopPlaceholder= "'phone' "-->
          <!--)-->
          <!--text-file.input(-->
          <!--:isFocus="true"-->
          <!--v-bind:isUnderLine="true"-->
          <!--v-bind:underLinkCocor="'#ccc'"-->
          <!--v-bind:focusLinkClocor="'#d36f39'"-->
          <!--v-bind:input.sync="searchInfo.passWord"-->
          <!--v-bind:name="'email'"-->
          <!--v-bind:PopPlaceholder= "'email'"-->
          <!--)-->
          <!--.button_box-->
            <!--.Remember_Me-->
              <!--input(type="checkbox" id="rememberMe" name="rememberMe" checked  v-on:click="isTtermsService =!isTtermsService"  )-->
              <!--label(for="rememberMe")-->
              <!--span Agreement on the terms of service-->

            <!--button.bottons( v-bind:class="{'Submit':isReset}" v-bind:disabled="!isReset"  ) Reset-->
            <!--button.bottons( v-bind:class="{'Submit':isSubmit}" v-bind:disabled="!isSubmit" v-on:click="Submit" ) Submit-->
          <!--.line-->

</template>

<style lang="stylus">
  @import "../../assets/stylus/default"
  .loding-bader
    $wh(w 100%, h 100%)
    display flex
    flex-direction column
    background-image: url("../../assets/img/login-line.jpg"), url("../../assets/img/login-line.jpg")
    background-repeat: repeat-x, repeat-x
    background-position: 0 0 , 0 bottom
    background-color #f7f5f0

    .title-box
        $wh(w 100%, h auto)
        $dflex(fd row, ai center, ac center)
        margin-bottom 5px; /*no*/
        margin-top 30px; /*no*/

        .items-box
          $wh(h 100%, '')
          flex 1
          $pad(t 10px no, '')
          display: flex;
          flex-direction: column;
          justify-content: center;

          .lin-middle
            $mar(t 4px no, '');
            height: 2px;/*no*/
            background: #faf3e3;
            border-top: 0.02666667rem solid #e69f8b;

          &:nth-of-type(2)
            line-height 100px
            letter-spacing 50px;
            align-items center
            color #d36f39
            text-align justify
            font "Tahoma"
            font-weight 900
            text-shadow 0px 2px 0px rgba(0, 59, 28, 0.8)

  @media (min-width: 700px)
      .items-box:nth-of-type(2)
          font-size 80px;/*no*/
          height 120px






    /*  .login-conent
        $wh(w 600px no, h 240px)
        $mar(t 30px no, r auto, b 0, l auto)
        $dflex(fd row, '')

        .icon-box
          $wh(w 120px no, '')
          margin 0
          padding 0
          align-self baseline
          line-height 0

          .user-header
            $wh(w 100px, h 50px)
            $mar(t 35px, '')

          select
            min-width 100px
            color #fff
            padding: 0 33%
            cursor pointer
            height 30px; !*no*!
            text-align center;
            outline none;
            margin-top -1px !*no*!;
            display block;
            border none;
            background rgba(133, 209, 243, 1);
            appearance: none;

            option
              text-align center;
              padding 5px auto; !*no*!
              height 40px;
        !*no*!

        .input-box
          $wh(w 100%, h auto);
          .title
            display block;
            font-size 30px; !*no*!
            color rgb(141, 141, 141);
            text-align left;
            text-shadow 0px 2px 0px rgba(255, 255, 255, 0.8) !*no*!;
            font-weight bold

          .Login_Here
            display block;
            font-size: 53px; !*no*!
            line-height 1.8;
            color: rgb(124, 124, 124);
            text-align: left;
            text-shadow 0px 2px 0px rgba(255, 255, 255, 0.8); !*no*!
            font-weight bold

          .line
            $wh(h 2px no, '');
            background #ccc;
            margin 0;
            display block;
            border-bottom solid 1px #fff

          .input
            height: 45px; !*no*!
            margin-top 30px;
          !*no*!

          .button_box
            $wh(w 520px no, '');
            $dflex(fd row, js space-between, fw flex-wrap);
            $mar(t 25px no, b 25px no);

            .Remember_Me
              flex 15%;
              font-size 0;
              align-self center;
              position: relative;
              line-height: 20px; !*no*!

              span
                font-size 20px; !*no*!
                width 150px; !*no*!
                color #7c7c7c;
                display inline-block;
                text-shadow 0px 2px 0px rgba(255, 255, 255, 0.8); !*no*!
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;

              input[type=checkbox]
                $wh(w 20px no, h 20px no);
                opacity: 0;

              label
                $pAbM(p, m, l 5px no, t 5px no);
                $wh(w 20px no, h 20px no);
                background-color: rgb(232, 233, 233);
                box-shadow: inset 0.5px 0.866px 0.85px 0.15px rgba(0, 0, 0, 0.25); !*no*!
                cursor pointer;

              input:checked + label
                background-color: #d36f39

              input:checked + label::after
                $pAbM(p, m, l 6px no, t 2px no);
                content: "";
                $wh(w 5px no, h 10px no);
                border: 2px solid #fff; !*no*!
                border-top: none;
                border-left: none;
                transform: rotate(45deg)

            .bottons
              flex 1;
              fz(24px no);
              cursor pointer;
              margin 0 15px; !*no*!
              color #7c7c7c;
              text-align center;
              line-height 50px; !*no*!
              border-radius: 4px; !*no*!
              background-image: linear-gradient(180deg, rgba(202, 208, 209, 0.83) 50%, rgba(202, 208, 209, 0.83) 100%);
              box-shadow: 0px 2px 0px 0px rgba(162, 162, 162, 0.67), inset 0px 1px 0px 0px rgba(232, 232, 232, 0);
              text-shadow 0px 2px 0px rgba(255, 255, 255, 0.8);
              border none;
              outline none

            .Submit
              color #ffffff;
              background-image: linear-gradient(180deg, rgb(206, 106, 57) 50%, #d36f39 100%);
              box-shadow: 0px 2px 0px 0px rgba(162, 162, 162, 0.87), inset 0px 1px 0px 0px rgba(232, 232, 232, 0);
              text-shadow 0px 2px 0px rgba(73, 73, 73, 0.8);
              transition: all 2s;
              &:hover
                background-image: linear-gradient(180deg, #e69f8beb 50%, #e69f8b 100%);
                box-shadow: 0px 2px 0px 0px rgba(162, 162, 162, 0.67), inset 0px 1px 0px 0px rgba(232, 232, 232, 0);
                text-shadow 0px 2px 0px rgba(255, 255, 255, 0.8);
                transition: all 2s;

      .inputBoxs
        $wh(w 400px no, h 350px);
        $pAbM(p, m, l 0, r 0, b 0, t 0);

        .input
          $wh(w 100%, h 45px no);
          $mar(t 40px no, '');
          border #ff504a solid 1px;
          border-radius 60px;
*/  /*no*/

</style>
