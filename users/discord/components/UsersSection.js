const { createElement } = react;

export const UsersSection = ({
  users,
  showUser,
  handleUserSelected,
  fetchUsers,
  activeTab,
  currentPage,
}) => {
  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  window.addEventListener(
    'scroll',
    debounce(() => {
      console.log('scroll triggered');
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        fetchUsers(activeTab, currentPage + 1); // Fetch next page
      }
    }, 200),
  );

  // handle scroll is not working - add event listener on every scroll element
  return createElement(
    'aside',
    {
      class: 'users_section',
      onclick: handleUserSelected,
    },
    users?.map((user) => {
      return createElement(
        'div',
        {
          class: `user_card ${
            users[showUser].id === user.id ? 'active_tab' : ''
          }`,
          data_key: user.id,
        },
        [
          createElement('img', {
            src: user?.picture?.url ?? dummyPicture,
            class: 'user_image',
          }),
          // createElement('span', {}, [
          //   user.first_name + ' ' + user.last_name + user.username,
          // ]),
          createElement('span', {}, [user.username]),
        ],
      );
    }),
  );
};
