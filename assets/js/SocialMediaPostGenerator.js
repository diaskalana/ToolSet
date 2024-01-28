import * as FilePond from 'filepond';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import Toastify from 'toastify-js'
import linkifyStr from "linkify-string";
import "linkify-plugin-mention";
import "linkify-plugin-hashtag";
import { round, changeSeparators } from "@alesmenzel/number-format";
import * as htmlToImage from 'html-to-image';
import download from "downloadjs";


import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

export function socialMediaPostGenerator() {

    document.querySelector('.modalTarget').innerHTML = `<div class="postGenerator"><div class="postGeneratorControls"><h4>Basic Configuration</h4><label for="postGeneratorPlatform">Select Platform:</label><select name="postGeneratorPlatform" id="postGeneratorPlatform"><option value="ig">Instagram</option></select><label for="postGeneratorAccountName">Account Name:</label><input id="postGeneratorAccountName" type="text"><label for="postGeneratorBg" class="igCbLabel"><input type="checkbox" name="postGeneratorBg" class="postGeneratorCb" id="postGeneratorBg">Background Color</label><input id="postGeneratorBgColor" type="color"><label for="postGeneratorPostText">Post text:</label><textarea name="postGeneratorPostText" id="postGeneratorPostText" cols="30" rows="3"></textarea><h4>Post Configuration</h4><div class="instaConfig"><label for="igProfileImage">Profile Image:</label><input id="igProfileImage" type="file"><label for="igPostImage">Post Image:</label><input id="igPostImage" type="file"><label for="igGeoCb" class="igCbLabel"><input type="checkbox" name="igGeoCb" class="postGeneratorCb" id="igGeoCb">Geo Tag</label><input id="igGeoTag" type="text"><label for="igDate">Post Date:</label><input id="igDate" type="text"><label for="igLikes">Likes:</label><input id="igLikes" type="number" min="1" step="1"><label for="igComments">Comments:</label><input id="igComments" type="number" min="1" step="1"><label for="igDarkMode" class="igCbLabel"><input type="checkbox" class="postGeneratorCb" id="igDarkMode">Dark Mode</label><label for="igFollowBtn" class="igCbLabel"><input type="checkbox" class="postGeneratorCb" id="igFollowBtn">Follow Button</label><label for="igVerified" class="igCbLabel"><input type="checkbox" class="postGeneratorCb" id="igVerified">Verified Profile</label><label for="igStoryCircle" class="igCbLabel"><input type="checkbox" class="postGeneratorCb" id="igStoryCircle">Story Circle</label><label for="igPeopleTagged" class="igCbLabel"><input type="checkbox" class="postGeneratorCb" id="igPeopleTagged">People Tagged</label><label for="igLikedPost" class="igCbLabel"><input type="checkbox" class="postGeneratorCb" id="igLikedPost">Reaction(Liked)</label></div></div><div class="postGeneratorOutput"><div class="postGeneratorPreview"><div class="instaPost" darkmode=""><div class="instaPostHeader"><div class="instaPostUserContent"><div class="instaPostMiniHeader"><div class="instaPostUserImageHolder"><div class="instaPostUserImage"></div></div><div class="instaPostUserMiniData"><div class="instaPostUserMiniData1"><p class="instaPostUsername"><span class="instaPostUsernameText">kalanadias</span><span class="instaPostVerfiedIcon"><svg aria-label="Verified" fill="rgb(0, 149, 246)" height="12" viewBox="0 0 40 40" width="12"><title>Verified</title><path d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z" fill-rule="evenodd"></path></svg></span></p><p class="instaPostDate">&nbsp;•&nbsp;<span class="instaPostDateText">7 d</span></p><p class="instaPostFollow">&nbsp;•&nbsp;<span class="instaPostFollowText">Follow</span></p></div><div class="instaPostUserMiniData2"><p class="instaPostGeoTag">Lahore,PK</p></div></div></div></div><svg aria-label="More Options" class="" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>More Options</title><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg></div><div class="instaPostImage"><div class="instaPostPeopleTag"><svg aria-label="Tags" class="instaPostPeopleTagIcon" fill="#ffffff" height="12" role="img" viewBox="0 0 24 24" width="12"><title>Tags</title><path d="M21.334 23H2.666a1 1 0 0 1-1-1v-1.354a6.279 6.279 0 0 1 6.272-6.272h8.124a6.279 6.279 0 0 1 6.271 6.271V22a1 1 0 0 1-1 1ZM12 13.269a6 6 0 1 1 6-6 6.007 6.007 0 0 1-6 6Z"></path></svg></div></div><div class="instaPostBtnArray"><div class="instaPostBtnArray1"><svg class="instaPostLikedBtn" aria-label="Unlike" fill="#ed4956" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg><svg class="instaPostLikeBtn" aria-label="Like" color="#262626" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg><svg aria-label="Comment" height="24" role="img" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fill-rule="evenodd"></path></svg><svg aria-label="Share Post" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg></div><div class="instaPostBtnArray2"><svg aria-label="Save" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path></svg></div></div><div class="instaPostLikes"><span class="instaPostLikesCount">123</span><span> likes</span></div><div class="instaPostText">This is a sample text. Add {{#hastags}} and your desired text. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, a...<span class="instaPostMoreText">more</span></div><div class="instaPostCommentCount"><span>View all </span><span class="instaPostCommentCountText">16</span><span> comments</span></div><div class="instaPostAddComment"><p class="instaPostAddCommentText">Add a comment...</p><svg aria-label="Emoji" fill="rgb(115, 115, 115)" height="13" role="img" viewBox="0 0 24 24" width="13"><title>Emoji</title><path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path></svg></div></div></div><div class="postGeneratorBtns"><button id="postGeneratorResetBtn">Reset</button><button id="postGeneratorDownloadBtn">Download</button><select name="pGenExportType" id="pGenExportType"><option value="png">PNG</option><option value="jpeg">JPEG</option></select></div></div></div>`


    FilePond.registerPlugin(
        FilePondPluginFileValidateType,
        FilePondPluginFileValidateSize,
    );

    const igProfileImage = document.querySelector('#igProfileImage');
    const pond1 = FilePond.create(igProfileImage, {
        acceptedFileTypes: ['image/*'],
        maxFileSize: '2MB',
        allowDrop: false,
        labelIdle: '<span class="filepond--label-action">Browse</span> Picture',
    });

    const igPostImage = document.querySelector('#igPostImage');
    const pond2 = FilePond.create(igPostImage, {
        acceptedFileTypes: ['image/*'],
        maxFileSize: '2MB',
        allowDrop: false,
        labelIdle: '<span class="filepond--label-action">Browse</span> Picture',
    });

    const postGeneratorAccountName = document.querySelector('#postGeneratorAccountName');
    const postGeneratorBg = document.querySelector('#postGeneratorBg');
    const postGeneratorBgColor = document.querySelector('#postGeneratorBgColor');
    const postGeneratorPostText = document.querySelector('#postGeneratorPostText');
    const igGeoCb = document.querySelector('#igGeoCb');
    const igGeoTag = document.querySelector('#igGeoTag');
    const igDate = document.querySelector('#igDate');
    const igLikes = document.querySelector('#igLikes');
    const igComments = document.querySelector('#igComments');
    const igDarkMode = document.querySelector('#igDarkMode');
    const igFollowBtn = document.querySelector('#igFollowBtn');
    const igVerified = document.querySelector('#igVerified');
    const igStoryCircle = document.querySelector('#igStoryCircle');
    const igLikedPost = document.querySelector('#igLikedPost');
    const igPeopleTagged = document.querySelector('#igPeopleTagged');

    const postGeneratorResetBtn = document.querySelector('#postGeneratorResetBtn');
    const postGeneratorDownloadBtn = document.querySelector('#postGeneratorDownloadBtn');
    const pGenExportType = document.querySelector('#pGenExportType');

    const modalTitle = document.querySelector('.modalHeader h3')
    const modalDescription = document.querySelector('.modalDescription')
    const instaPostUsernameText = document.querySelector('.instaPostUsernameText');
    const postGeneratorPreview = document.querySelector('.postGeneratorPreview');
    const instaPostText = document.querySelector('.instaPostText');
    const instaPostGeoTag = document.querySelector('.instaPostGeoTag');
    const instaPostDateText = document.querySelector('.instaPostDateText');
    const instaPostFollow = document.querySelector('.instaPostFollow');
    const instaPostLikesCount = document.querySelector('.instaPostLikesCount');
    const instaPostLikes = document.querySelector('.instaPostLikes');
    const instaPostCommentCountText = document.querySelector('.instaPostCommentCountText');
    const instaPostCommentCount = document.querySelector('.instaPostCommentCount');
    const instaPost = document.querySelector('.instaPost');
    const instaPostVerfiedIcon = document.querySelector('.instaPostVerfiedIcon');
    const instaPostUserImageHolder = document.querySelector('.instaPostUserImageHolder');
    const instaPostUserImage = document.querySelector('.instaPostUserImage');
    const instaPostLikedBtn = document.querySelector('.instaPostLikedBtn');
    const instaPostLikeBtn = document.querySelector('.instaPostLikeBtn');
    const instaPostDate = document.querySelector('.instaPostDate');
    const instaPostPeopleTag = document.querySelector('.instaPostPeopleTag');
    const instaPostImage = document.querySelector('.instaPostImage');

    postGeneratorResetBtn.addEventListener('click', () => {
        resetInstaPostFunc()
    })
    postGeneratorDownloadBtn.addEventListener('click', () => {
        try {
            if (pGenExportType.value == 'png') {

                htmlToImage.toPng(postGeneratorPreview)
                    .then(function (dataUrl) {
                        download(dataUrl, 'SocialPost(ToolSet).png');
                    })
                    .catch(function (error) {
                        console.error('oops, something went wrong!', error);
                    });
            } else if (pGenExportType.value == 'jpeg') {
                htmlToImage.toJpeg(postGeneratorPreview, { quality: 0.95 })
                    .then(function (dataUrl) {
                        download(dataUrl, 'SocialPost(ToolSet).jpeg');
                    });
            }
            Toastify({
                text: "📥 Image Downloading!",
                className: "info",
                className: "notification",
                offset: {
                    x: 20,
                    y: 20
                },
            }).showToast();
        } catch (error) {
            console.log(error)
        }
    })

    let endingMore;
    function instaPostTextFormatting(string) {
        const options = {
            className: (href, type) => {
                if (type != 'url' && type != 'email') {
                    return "instaSpecialText"
                }
            },
            formatHref: function (href, type) {
                href = '#'
                return href;
            },
        };
        if (linkifyStr(string, options).length >= 125) {
            let returnString = linkifyStr(string, options).substring(0, 125)
            returnString += '...'
            endingMore = document.createElement('span')
            endingMore.innerText = ' more'
            endingMore.classList.add('instaPostMoreText')
            return returnString
        } else {
            endingMore = null;
            return linkifyStr(string, options)
        }
    }

    const igRoundCount = round(1)
    const igSeparatorCount = changeSeparators(',', '.')


    function updatePostBlocks() {
        instaPostDate.style.display = (igDate.value == '') ? 'none' : 'block'
        instaPostCommentCount.style.display = (igComments.value > 1) ? 'block' : 'none'
        instaPostLikes.style.display = (igLikes.value > 1) ? 'block' : 'none'
        instaPostText.style.display = (postGeneratorPostText.value == '') ? 'none' : 'block'


    }

    resetInstaPostFunc()

    function resetInstaPostFunc() {
        modalTitle.textContent = 'Social Media Post Generator'
        modalDescription.textContent = 'Social media post generator is an online tool that can be used to create a fake social media posts. This is a free, simple, and easy-to-use tool that anyone can use to generate their own fake social media posts.'
        postGeneratorAccountName.value = 'kalanadias'
        postGeneratorBg.checked = true
        postGeneratorBgColor.value = '#ffffff'
        postGeneratorPostText.value = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo delectus omnis numquam consequuntur dolorum ab nulla eaque deleniti fuga commodi.`
        igGeoCb.checked = true
        igGeoTag.value = 'Lahore,PK'
        igDate.value = '7 d'
        igLikes.value = 32415
        igComments.value = 1324
        igDarkMode.checked = true
        igFollowBtn.checked = true
        igVerified.checked = true
        igStoryCircle.checked = true
        igPeopleTagged.checked = true
        igLikedPost.checked = true

        instaPostUserImage.style.backgroundImage = `url(./assets/images/avatar.jpg)`
        instaPostImage.style.backgroundImage = `url(./assets/images/bgDummy.jpg)`

        updateInstaPost()
    }

    function updateInstaPost() {
        instaPostUsernameText.textContent = postGeneratorAccountName.value

        if (postGeneratorBg.checked == true) {
            postGeneratorBgColor.style.display = 'block'
            instaPost.style.boxShadow = 'rgba(0, 0, 0, 0.55) 0px 20px 68px 0px'
            postGeneratorPreview.style.backgroundColor = postGeneratorBgColor.value

        } else {
            postGeneratorBgColor.style.display = 'none'
            instaPost.style.boxShadow = 'none'
            postGeneratorPreview.style.backgroundColor = 'transparent'
        }

        instaPostText.innerHTML = instaPostTextFormatting(postGeneratorPostText.value)
        if (endingMore) {
            instaPostText.appendChild(endingMore)
        }

        if (igGeoCb.checked == true) {
            igGeoTag.style.display = 'block'
            instaPostGeoTag.style.display = 'block'
            instaPostGeoTag.textContent = igGeoTag.value

        } else {
            igGeoTag.style.display = 'none'
            instaPostGeoTag.style.display = 'none'
        }
        instaPostDateText.textContent = igDate.value

        instaPostLikesCount.textContent = igSeparatorCount(igRoundCount(igLikes.value))
        instaPostCommentCountText.textContent = igSeparatorCount(igRoundCount(igComments.value))

        if (igDarkMode.checked == true) {
            instaPost.setAttribute('darkMode', 'true')

        } else {
            instaPost.setAttribute('darkMode', '')

        }

        if (igFollowBtn.checked == true) {
            instaPostFollow.style.display = 'block'

        } else {
            instaPostFollow.style.display = 'none'
        }

        if (igVerified.checked == true) {
            instaPostVerfiedIcon.style.display = 'inline'

        } else {
            instaPostVerfiedIcon.style.display = 'none'
        }

        if (igStoryCircle.checked == true) {
            instaPostUserImageHolder.style.background = `linear-gradient(
                45deg,
                #f09433 0%,
                #e6683c 25%,
                #dc2743 50%,
                #cc2366 75%,
                #bc1888 100%
              )`
            instaPostUserImage.style.border = '2px solid var(--ig-bg-color)'

        } else {
            instaPostUserImageHolder.style.background = 'var(--ig-bg-color)'
            instaPostUserImage.style.border = 'none'
        }

        if (igLikedPost.checked == true) {
            instaPostLikedBtn.style.display = 'block'
            instaPostLikeBtn.style.display = 'none'

        } else {
            instaPostLikedBtn.style.display = 'none'
            instaPostLikeBtn.style.display = 'block'
        }
        if (igPeopleTagged.checked == true) {
            instaPostPeopleTag.style.display = 'flex'

        } else {
            instaPostPeopleTag.style.display = 'none'
        }
        updatePostBlocks()
    }


    document.querySelector('.postGeneratorControls').addEventListener('input', () => {
        updateInstaPost()
    })

    document.getElementById('igProfileImage').addEventListener('change', (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            const base64String = reader.result.replace('data:', '').replace(/^.+,/, '');
            localStorage.setItem('profileImage', base64String);
            document.querySelector('.instaPostUserImage').style.backgroundImage = `url(data:image/png;base64,${base64String})`;
        };
        reader.readAsDataURL(file);
    })

    document.getElementById('igPostImage').addEventListener('change', (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            const base64String = reader.result.replace('data:', '').replace(/^.+,/, '');
            localStorage.setItem('postImage', base64String);
            document.querySelector('.instaPostImage').style.backgroundImage = `url(data:image/png;base64,${base64String})`;
        };
        reader.readAsDataURL(file);
    })
}