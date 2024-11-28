<script lang="ts">
import Member from "./sub-components/member.vue";
import MembersList from "~/js/members.json";

export default {
  data() {
    return {
      MembersList,
    };
  },
  components: { Member },
};
</script>

<template>
  <section id="main-group">
    <div id="inside-main-group">
      <h2>Integrantes</h2>
      <div class="members">
        <Member
          class="member"
          v-for="member in MembersList"
          :name="member.name"
          :user="member.user"
          :srcImg="member.srcImg"
        />
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
section#main-group {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 30px;
  background-color: var(--first-color);
}

#inside-main-group {
  width: 100%;
  max-width: 1280px;
}

.members {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px 20px;
}

@media (max-width: 999px) {
  .members {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  .member {
    width: 250px;
  }
}
</style>
