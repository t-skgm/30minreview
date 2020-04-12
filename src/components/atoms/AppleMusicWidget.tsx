import * as React from 'react'
import styled from "@emotion/styled"
import { consts } from "@/consts"

const listUrlPrefix = 'https://music.apple.com/jp/playlist/'
const widgetUrlPrefix = '//embed.music.apple.com/jp/playlist/'
const queries = `?app=music&at=${consts.amAffiliateTag}`

const Wrapper = styled.div`
  margin: 1rem 0;
`

type Props = {
  playlistId: string
  playlistName?: string
}

export const AppleMusicWidget: React.FC<Props> = ({ playlistId, playlistName }) => {
  return (
    <Wrapper>
      <iframe
        allow="autoplay *; encrypted-media *;"
        frameBorder="0"
        height="450"
        style={{ width:'100%', maxWidth:'660px', overflow: 'hidden', background: 'transparent' }}
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        src={widgetUrlPrefix + playlistId + queries}
      />
      <p><a href={listUrlPrefix + playlistId + queries}>{playlistName + ' (Apple Music)' || 'Apple Music Playlist'}</a></p>
    </Wrapper>
  )
}
