import React from 'react'
import Link from 'next/link'
export default function SidebarAdmin() {
  return (
    <div className="dashboard-sidebar-wrapper">
    <div className="dashboard-sidebar-menu">
      <ul>
        <li className="active">
          <Link href="/dashboard">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              viewBox="0 0 18 18"
            >
              <g>
                <path d="M8.42631 0.0843773C8.31381 0.130079 8.16264 0.210939 8.09233 0.260159C8.0185 0.309376 6.24311 2.0707 4.14076 4.17305C1.06108 7.25977 0.305216 8.0332 0.231388 8.18086C-0.106112 8.86289 0.00638798 9.6082 0.523185 10.1285C0.846623 10.4484 1.25795 10.6172 1.72904 10.6172H1.96811V13.4297C1.96811 15.3316 1.98217 16.2984 2.00678 16.425C2.14037 17.0648 2.65717 17.6449 3.29701 17.8664C3.52905 17.9473 3.54662 17.9473 5.24467 17.9473C6.91811 17.9473 6.95678 17.9473 7.0517 17.8734C7.10444 17.8348 7.18178 17.7574 7.22045 17.7047C7.29428 17.6098 7.29428 17.5641 7.31186 15.2613L7.32944 12.9129L7.43491 12.7406C7.5685 12.5262 7.8392 12.3539 8.09936 12.3223C8.1978 12.3082 8.68998 12.3047 9.19272 12.3117L10.1068 12.3223L10.2931 12.4242C10.4689 12.5227 10.5814 12.6387 10.6904 12.832C10.729 12.9059 10.7431 13.3383 10.7572 15.2648C10.7747 17.5641 10.7747 17.6098 10.8486 17.7047C10.8872 17.7574 10.9646 17.8348 11.0173 17.8734C11.1122 17.9473 11.1509 17.9473 12.8244 17.9473C14.5224 17.9473 14.54 17.9473 14.772 17.8664C15.4119 17.6449 15.9287 17.0648 16.0623 16.425C16.0869 16.2984 16.1009 15.3316 16.1009 13.4297V10.6172H16.34C17.0009 10.6172 17.5775 10.2656 17.8623 9.68555C17.9818 9.44297 17.9818 9.43594 17.9818 8.96484C17.9818 8.16328 18.3861 8.63789 13.872 4.12735C9.38608 -0.362108 9.83608 0.0246105 9.06967 0.00703239C8.67241 1.90735e-06 8.61264 0.00703239 8.42631 0.0843773ZM9.29467 1.08985C9.50209 1.18828 16.8498 8.54648 16.9271 8.72578C17.0009 8.90508 16.9939 9.05625 16.906 9.23203C16.7759 9.50274 16.6669 9.54141 15.9884 9.5625C15.3521 9.58008 15.3064 9.59414 15.1376 9.82266C15.0638 9.91758 15.0638 9.95625 15.0462 13.1063L15.0287 16.2949L14.9302 16.4602C14.8775 16.5516 14.7826 16.6676 14.7193 16.7133C14.4732 16.9031 14.3994 16.9102 13.0564 16.9102H11.8119V14.9414C11.8119 13.6512 11.7978 12.9129 11.7732 12.7898C11.6361 12.1289 11.1052 11.5594 10.4232 11.3449C10.1912 11.2711 10.1138 11.2676 9.03451 11.2676C7.77592 11.2676 7.71264 11.2746 7.26264 11.5031C6.81615 11.7281 6.40131 12.2836 6.29584 12.7898C6.27123 12.9129 6.25717 13.6512 6.25717 14.9414V16.9102H5.01264C3.66967 16.9102 3.59584 16.9031 3.34975 16.7133C3.28647 16.6676 3.19155 16.5516 3.13881 16.4602L3.04037 16.2949L3.02279 13.1063C3.00522 9.95625 3.00522 9.91758 2.93139 9.82266C2.76264 9.59414 2.71694 9.58008 2.08061 9.5625C1.40209 9.54141 1.29311 9.50274 1.16303 9.23203C1.07514 9.05625 1.06811 8.90508 1.14194 8.72578C1.21576 8.55 8.56694 1.1918 8.77084 1.08985C8.95014 1.00196 9.11537 1.00196 9.29467 1.08985Z" />
              </g>
            </svg>
            <h6>Dashboard</h6>
          </Link>
        </li>

        <li className="">
          <Link href="/admin/book">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              viewBox="0 0 18 18"
            >
              <g>
                <path d="M8.42631 0.0843773C8.31381 0.130079 8.16264 0.210939 8.09233 0.260159C8.0185 0.309376 6.24311 2.0707 4.14076 4.17305C1.06108 7.25977 0.305216 8.0332 0.231388 8.18086C-0.106112 8.86289 0.00638798 9.6082 0.523185 10.1285C0.846623 10.4484 1.25795 10.6172 1.72904 10.6172H1.96811V13.4297C1.96811 15.3316 1.98217 16.2984 2.00678 16.425C2.14037 17.0648 2.65717 17.6449 3.29701 17.8664C3.52905 17.9473 3.54662 17.9473 5.24467 17.9473C6.91811 17.9473 6.95678 17.9473 7.0517 17.8734C7.10444 17.8348 7.18178 17.7574 7.22045 17.7047C7.29428 17.6098 7.29428 17.5641 7.31186 15.2613L7.32944 12.9129L7.43491 12.7406C7.5685 12.5262 7.8392 12.3539 8.09936 12.3223C8.1978 12.3082 8.68998 12.3047 9.19272 12.3117L10.1068 12.3223L10.2931 12.4242C10.4689 12.5227 10.5814 12.6387 10.6904 12.832C10.729 12.9059 10.7431 13.3383 10.7572 15.2648C10.7747 17.5641 10.7747 17.6098 10.8486 17.7047C10.8872 17.7574 10.9646 17.8348 11.0173 17.8734C11.1122 17.9473 11.1509 17.9473 12.8244 17.9473C14.5224 17.9473 14.54 17.9473 14.772 17.8664C15.4119 17.6449 15.9287 17.0648 16.0623 16.425C16.0869 16.2984 16.1009 15.3316 16.1009 13.4297V10.6172H16.34C17.0009 10.6172 17.5775 10.2656 17.8623 9.68555C17.9818 9.44297 17.9818 9.43594 17.9818 8.96484C17.9818 8.16328 18.3861 8.63789 13.872 4.12735C9.38608 -0.362108 9.83608 0.0246105 9.06967 0.00703239C8.67241 1.90735e-06 8.61264 0.00703239 8.42631 0.0843773ZM9.29467 1.08985C9.50209 1.18828 16.8498 8.54648 16.9271 8.72578C17.0009 8.90508 16.9939 9.05625 16.906 9.23203C16.7759 9.50274 16.6669 9.54141 15.9884 9.5625C15.3521 9.58008 15.3064 9.59414 15.1376 9.82266C15.0638 9.91758 15.0638 9.95625 15.0462 13.1063L15.0287 16.2949L14.9302 16.4602C14.8775 16.5516 14.7826 16.6676 14.7193 16.7133C14.4732 16.9031 14.3994 16.9102 13.0564 16.9102H11.8119V14.9414C11.8119 13.6512 11.7978 12.9129 11.7732 12.7898C11.6361 12.1289 11.1052 11.5594 10.4232 11.3449C10.1912 11.2711 10.1138 11.2676 9.03451 11.2676C7.77592 11.2676 7.71264 11.2746 7.26264 11.5031C6.81615 11.7281 6.40131 12.2836 6.29584 12.7898C6.27123 12.9129 6.25717 13.6512 6.25717 14.9414V16.9102H5.01264C3.66967 16.9102 3.59584 16.9031 3.34975 16.7133C3.28647 16.6676 3.19155 16.5516 3.13881 16.4602L3.04037 16.2949L3.02279 13.1063C3.00522 9.95625 3.00522 9.91758 2.93139 9.82266C2.76264 9.59414 2.71694 9.58008 2.08061 9.5625C1.40209 9.54141 1.29311 9.50274 1.16303 9.23203C1.07514 9.05625 1.06811 8.90508 1.14194 8.72578C1.21576 8.55 8.56694 1.1918 8.77084 1.08985C8.95014 1.00196 9.11537 1.00196 9.29467 1.08985Z" />
              </g>
            </svg>
            <h6>AllProperties</h6>
          </Link>
        </li>
    

        <li className="">
          <Link href="/admin/book/create">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              viewBox="0 0 18 18"
            >
              <g>
                <path d="M8.42631 0.0843773C8.31381 0.130079 8.16264 0.210939 8.09233 0.260159C8.0185 0.309376 6.24311 2.0707 4.14076 4.17305C1.06108 7.25977 0.305216 8.0332 0.231388 8.18086C-0.106112 8.86289 0.00638798 9.6082 0.523185 10.1285C0.846623 10.4484 1.25795 10.6172 1.72904 10.6172H1.96811V13.4297C1.96811 15.3316 1.98217 16.2984 2.00678 16.425C2.14037 17.0648 2.65717 17.6449 3.29701 17.8664C3.52905 17.9473 3.54662 17.9473 5.24467 17.9473C6.91811 17.9473 6.95678 17.9473 7.0517 17.8734C7.10444 17.8348 7.18178 17.7574 7.22045 17.7047C7.29428 17.6098 7.29428 17.5641 7.31186 15.2613L7.32944 12.9129L7.43491 12.7406C7.5685 12.5262 7.8392 12.3539 8.09936 12.3223C8.1978 12.3082 8.68998 12.3047 9.19272 12.3117L10.1068 12.3223L10.2931 12.4242C10.4689 12.5227 10.5814 12.6387 10.6904 12.832C10.729 12.9059 10.7431 13.3383 10.7572 15.2648C10.7747 17.5641 10.7747 17.6098 10.8486 17.7047C10.8872 17.7574 10.9646 17.8348 11.0173 17.8734C11.1122 17.9473 11.1509 17.9473 12.8244 17.9473C14.5224 17.9473 14.54 17.9473 14.772 17.8664C15.4119 17.6449 15.9287 17.0648 16.0623 16.425C16.0869 16.2984 16.1009 15.3316 16.1009 13.4297V10.6172H16.34C17.0009 10.6172 17.5775 10.2656 17.8623 9.68555C17.9818 9.44297 17.9818 9.43594 17.9818 8.96484C17.9818 8.16328 18.3861 8.63789 13.872 4.12735C9.38608 -0.362108 9.83608 0.0246105 9.06967 0.00703239C8.67241 1.90735e-06 8.61264 0.00703239 8.42631 0.0843773ZM9.29467 1.08985C9.50209 1.18828 16.8498 8.54648 16.9271 8.72578C17.0009 8.90508 16.9939 9.05625 16.906 9.23203C16.7759 9.50274 16.6669 9.54141 15.9884 9.5625C15.3521 9.58008 15.3064 9.59414 15.1376 9.82266C15.0638 9.91758 15.0638 9.95625 15.0462 13.1063L15.0287 16.2949L14.9302 16.4602C14.8775 16.5516 14.7826 16.6676 14.7193 16.7133C14.4732 16.9031 14.3994 16.9102 13.0564 16.9102H11.8119V14.9414C11.8119 13.6512 11.7978 12.9129 11.7732 12.7898C11.6361 12.1289 11.1052 11.5594 10.4232 11.3449C10.1912 11.2711 10.1138 11.2676 9.03451 11.2676C7.77592 11.2676 7.71264 11.2746 7.26264 11.5031C6.81615 11.7281 6.40131 12.2836 6.29584 12.7898C6.27123 12.9129 6.25717 13.6512 6.25717 14.9414V16.9102H5.01264C3.66967 16.9102 3.59584 16.9031 3.34975 16.7133C3.28647 16.6676 3.19155 16.5516 3.13881 16.4602L3.04037 16.2949L3.02279 13.1063C3.00522 9.95625 3.00522 9.91758 2.93139 9.82266C2.76264 9.59414 2.71694 9.58008 2.08061 9.5625C1.40209 9.54141 1.29311 9.50274 1.16303 9.23203C1.07514 9.05625 1.06811 8.90508 1.14194 8.72578C1.21576 8.55 8.56694 1.1918 8.77084 1.08985C8.95014 1.00196 9.11537 1.00196 9.29467 1.08985Z" />
              </g>
            </svg>
            <h6>Add Property</h6>
          </Link>
        </li>

        <li className="">
          <Link href="/admin/country">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              viewBox="0 0 18 18"
            >
              <g>
                <path d="M8.42631 0.0843773C8.31381 0.130079 8.16264 0.210939 8.09233 0.260159C8.0185 0.309376 6.24311 2.0707 4.14076 4.17305C1.06108 7.25977 0.305216 8.0332 0.231388 8.18086C-0.106112 8.86289 0.00638798 9.6082 0.523185 10.1285C0.846623 10.4484 1.25795 10.6172 1.72904 10.6172H1.96811V13.4297C1.96811 15.3316 1.98217 16.2984 2.00678 16.425C2.14037 17.0648 2.65717 17.6449 3.29701 17.8664C3.52905 17.9473 3.54662 17.9473 5.24467 17.9473C6.91811 17.9473 6.95678 17.9473 7.0517 17.8734C7.10444 17.8348 7.18178 17.7574 7.22045 17.7047C7.29428 17.6098 7.29428 17.5641 7.31186 15.2613L7.32944 12.9129L7.43491 12.7406C7.5685 12.5262 7.8392 12.3539 8.09936 12.3223C8.1978 12.3082 8.68998 12.3047 9.19272 12.3117L10.1068 12.3223L10.2931 12.4242C10.4689 12.5227 10.5814 12.6387 10.6904 12.832C10.729 12.9059 10.7431 13.3383 10.7572 15.2648C10.7747 17.5641 10.7747 17.6098 10.8486 17.7047C10.8872 17.7574 10.9646 17.8348 11.0173 17.8734C11.1122 17.9473 11.1509 17.9473 12.8244 17.9473C14.5224 17.9473 14.54 17.9473 14.772 17.8664C15.4119 17.6449 15.9287 17.0648 16.0623 16.425C16.0869 16.2984 16.1009 15.3316 16.1009 13.4297V10.6172H16.34C17.0009 10.6172 17.5775 10.2656 17.8623 9.68555C17.9818 9.44297 17.9818 9.43594 17.9818 8.96484C17.9818 8.16328 18.3861 8.63789 13.872 4.12735C9.38608 -0.362108 9.83608 0.0246105 9.06967 0.00703239C8.67241 1.90735e-06 8.61264 0.00703239 8.42631 0.0843773ZM9.29467 1.08985C9.50209 1.18828 16.8498 8.54648 16.9271 8.72578C17.0009 8.90508 16.9939 9.05625 16.906 9.23203C16.7759 9.50274 16.6669 9.54141 15.9884 9.5625C15.3521 9.58008 15.3064 9.59414 15.1376 9.82266C15.0638 9.91758 15.0638 9.95625 15.0462 13.1063L15.0287 16.2949L14.9302 16.4602C14.8775 16.5516 14.7826 16.6676 14.7193 16.7133C14.4732 16.9031 14.3994 16.9102 13.0564 16.9102H11.8119V14.9414C11.8119 13.6512 11.7978 12.9129 11.7732 12.7898C11.6361 12.1289 11.1052 11.5594 10.4232 11.3449C10.1912 11.2711 10.1138 11.2676 9.03451 11.2676C7.77592 11.2676 7.71264 11.2746 7.26264 11.5031C6.81615 11.7281 6.40131 12.2836 6.29584 12.7898C6.27123 12.9129 6.25717 13.6512 6.25717 14.9414V16.9102H5.01264C3.66967 16.9102 3.59584 16.9031 3.34975 16.7133C3.28647 16.6676 3.19155 16.5516 3.13881 16.4602L3.04037 16.2949L3.02279 13.1063C3.00522 9.95625 3.00522 9.91758 2.93139 9.82266C2.76264 9.59414 2.71694 9.58008 2.08061 9.5625C1.40209 9.54141 1.29311 9.50274 1.16303 9.23203C1.07514 9.05625 1.06811 8.90508 1.14194 8.72578C1.21576 8.55 8.56694 1.1918 8.77084 1.08985C8.95014 1.00196 9.11537 1.00196 9.29467 1.08985Z" />
              </g>
            </svg>
            <h6>All Countries</h6>
          </Link>
        </li>
    


        <li className="">
          <Link href="/admin/country/create">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              viewBox="0 0 18 18"
            >
              <g>
                <path d="M8.42631 0.0843773C8.31381 0.130079 8.16264 0.210939 8.09233 0.260159C8.0185 0.309376 6.24311 2.0707 4.14076 4.17305C1.06108 7.25977 0.305216 8.0332 0.231388 8.18086C-0.106112 8.86289 0.00638798 9.6082 0.523185 10.1285C0.846623 10.4484 1.25795 10.6172 1.72904 10.6172H1.96811V13.4297C1.96811 15.3316 1.98217 16.2984 2.00678 16.425C2.14037 17.0648 2.65717 17.6449 3.29701 17.8664C3.52905 17.9473 3.54662 17.9473 5.24467 17.9473C6.91811 17.9473 6.95678 17.9473 7.0517 17.8734C7.10444 17.8348 7.18178 17.7574 7.22045 17.7047C7.29428 17.6098 7.29428 17.5641 7.31186 15.2613L7.32944 12.9129L7.43491 12.7406C7.5685 12.5262 7.8392 12.3539 8.09936 12.3223C8.1978 12.3082 8.68998 12.3047 9.19272 12.3117L10.1068 12.3223L10.2931 12.4242C10.4689 12.5227 10.5814 12.6387 10.6904 12.832C10.729 12.9059 10.7431 13.3383 10.7572 15.2648C10.7747 17.5641 10.7747 17.6098 10.8486 17.7047C10.8872 17.7574 10.9646 17.8348 11.0173 17.8734C11.1122 17.9473 11.1509 17.9473 12.8244 17.9473C14.5224 17.9473 14.54 17.9473 14.772 17.8664C15.4119 17.6449 15.9287 17.0648 16.0623 16.425C16.0869 16.2984 16.1009 15.3316 16.1009 13.4297V10.6172H16.34C17.0009 10.6172 17.5775 10.2656 17.8623 9.68555C17.9818 9.44297 17.9818 9.43594 17.9818 8.96484C17.9818 8.16328 18.3861 8.63789 13.872 4.12735C9.38608 -0.362108 9.83608 0.0246105 9.06967 0.00703239C8.67241 1.90735e-06 8.61264 0.00703239 8.42631 0.0843773ZM9.29467 1.08985C9.50209 1.18828 16.8498 8.54648 16.9271 8.72578C17.0009 8.90508 16.9939 9.05625 16.906 9.23203C16.7759 9.50274 16.6669 9.54141 15.9884 9.5625C15.3521 9.58008 15.3064 9.59414 15.1376 9.82266C15.0638 9.91758 15.0638 9.95625 15.0462 13.1063L15.0287 16.2949L14.9302 16.4602C14.8775 16.5516 14.7826 16.6676 14.7193 16.7133C14.4732 16.9031 14.3994 16.9102 13.0564 16.9102H11.8119V14.9414C11.8119 13.6512 11.7978 12.9129 11.7732 12.7898C11.6361 12.1289 11.1052 11.5594 10.4232 11.3449C10.1912 11.2711 10.1138 11.2676 9.03451 11.2676C7.77592 11.2676 7.71264 11.2746 7.26264 11.5031C6.81615 11.7281 6.40131 12.2836 6.29584 12.7898C6.27123 12.9129 6.25717 13.6512 6.25717 14.9414V16.9102H5.01264C3.66967 16.9102 3.59584 16.9031 3.34975 16.7133C3.28647 16.6676 3.19155 16.5516 3.13881 16.4602L3.04037 16.2949L3.02279 13.1063C3.00522 9.95625 3.00522 9.91758 2.93139 9.82266C2.76264 9.59414 2.71694 9.58008 2.08061 9.5625C1.40209 9.54141 1.29311 9.50274 1.16303 9.23203C1.07514 9.05625 1.06811 8.90508 1.14194 8.72578C1.21576 8.55 8.56694 1.1918 8.77084 1.08985C8.95014 1.00196 9.11537 1.00196 9.29467 1.08985Z" />
              </g>
            </svg>
            <h6>Add Country</h6>
          </Link>
        </li>
    


        <li className="">
          <Link href="/admin/city">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              viewBox="0 0 18 18"
            >
              <g>
                <path d="M8.42631 0.0843773C8.31381 0.130079 8.16264 0.210939 8.09233 0.260159C8.0185 0.309376 6.24311 2.0707 4.14076 4.17305C1.06108 7.25977 0.305216 8.0332 0.231388 8.18086C-0.106112 8.86289 0.00638798 9.6082 0.523185 10.1285C0.846623 10.4484 1.25795 10.6172 1.72904 10.6172H1.96811V13.4297C1.96811 15.3316 1.98217 16.2984 2.00678 16.425C2.14037 17.0648 2.65717 17.6449 3.29701 17.8664C3.52905 17.9473 3.54662 17.9473 5.24467 17.9473C6.91811 17.9473 6.95678 17.9473 7.0517 17.8734C7.10444 17.8348 7.18178 17.7574 7.22045 17.7047C7.29428 17.6098 7.29428 17.5641 7.31186 15.2613L7.32944 12.9129L7.43491 12.7406C7.5685 12.5262 7.8392 12.3539 8.09936 12.3223C8.1978 12.3082 8.68998 12.3047 9.19272 12.3117L10.1068 12.3223L10.2931 12.4242C10.4689 12.5227 10.5814 12.6387 10.6904 12.832C10.729 12.9059 10.7431 13.3383 10.7572 15.2648C10.7747 17.5641 10.7747 17.6098 10.8486 17.7047C10.8872 17.7574 10.9646 17.8348 11.0173 17.8734C11.1122 17.9473 11.1509 17.9473 12.8244 17.9473C14.5224 17.9473 14.54 17.9473 14.772 17.8664C15.4119 17.6449 15.9287 17.0648 16.0623 16.425C16.0869 16.2984 16.1009 15.3316 16.1009 13.4297V10.6172H16.34C17.0009 10.6172 17.5775 10.2656 17.8623 9.68555C17.9818 9.44297 17.9818 9.43594 17.9818 8.96484C17.9818 8.16328 18.3861 8.63789 13.872 4.12735C9.38608 -0.362108 9.83608 0.0246105 9.06967 0.00703239C8.67241 1.90735e-06 8.61264 0.00703239 8.42631 0.0843773ZM9.29467 1.08985C9.50209 1.18828 16.8498 8.54648 16.9271 8.72578C17.0009 8.90508 16.9939 9.05625 16.906 9.23203C16.7759 9.50274 16.6669 9.54141 15.9884 9.5625C15.3521 9.58008 15.3064 9.59414 15.1376 9.82266C15.0638 9.91758 15.0638 9.95625 15.0462 13.1063L15.0287 16.2949L14.9302 16.4602C14.8775 16.5516 14.7826 16.6676 14.7193 16.7133C14.4732 16.9031 14.3994 16.9102 13.0564 16.9102H11.8119V14.9414C11.8119 13.6512 11.7978 12.9129 11.7732 12.7898C11.6361 12.1289 11.1052 11.5594 10.4232 11.3449C10.1912 11.2711 10.1138 11.2676 9.03451 11.2676C7.77592 11.2676 7.71264 11.2746 7.26264 11.5031C6.81615 11.7281 6.40131 12.2836 6.29584 12.7898C6.27123 12.9129 6.25717 13.6512 6.25717 14.9414V16.9102H5.01264C3.66967 16.9102 3.59584 16.9031 3.34975 16.7133C3.28647 16.6676 3.19155 16.5516 3.13881 16.4602L3.04037 16.2949L3.02279 13.1063C3.00522 9.95625 3.00522 9.91758 2.93139 9.82266C2.76264 9.59414 2.71694 9.58008 2.08061 9.5625C1.40209 9.54141 1.29311 9.50274 1.16303 9.23203C1.07514 9.05625 1.06811 8.90508 1.14194 8.72578C1.21576 8.55 8.56694 1.1918 8.77084 1.08985C8.95014 1.00196 9.11537 1.00196 9.29467 1.08985Z" />
              </g>
            </svg>
            <h6>All Cities</h6>
          </Link>
        </li>
    


        <li className="">
          <Link href="/admin/city/create">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              viewBox="0 0 18 18"
            >
              <g>
                <path d="M8.42631 0.0843773C8.31381 0.130079 8.16264 0.210939 8.09233 0.260159C8.0185 0.309376 6.24311 2.0707 4.14076 4.17305C1.06108 7.25977 0.305216 8.0332 0.231388 8.18086C-0.106112 8.86289 0.00638798 9.6082 0.523185 10.1285C0.846623 10.4484 1.25795 10.6172 1.72904 10.6172H1.96811V13.4297C1.96811 15.3316 1.98217 16.2984 2.00678 16.425C2.14037 17.0648 2.65717 17.6449 3.29701 17.8664C3.52905 17.9473 3.54662 17.9473 5.24467 17.9473C6.91811 17.9473 6.95678 17.9473 7.0517 17.8734C7.10444 17.8348 7.18178 17.7574 7.22045 17.7047C7.29428 17.6098 7.29428 17.5641 7.31186 15.2613L7.32944 12.9129L7.43491 12.7406C7.5685 12.5262 7.8392 12.3539 8.09936 12.3223C8.1978 12.3082 8.68998 12.3047 9.19272 12.3117L10.1068 12.3223L10.2931 12.4242C10.4689 12.5227 10.5814 12.6387 10.6904 12.832C10.729 12.9059 10.7431 13.3383 10.7572 15.2648C10.7747 17.5641 10.7747 17.6098 10.8486 17.7047C10.8872 17.7574 10.9646 17.8348 11.0173 17.8734C11.1122 17.9473 11.1509 17.9473 12.8244 17.9473C14.5224 17.9473 14.54 17.9473 14.772 17.8664C15.4119 17.6449 15.9287 17.0648 16.0623 16.425C16.0869 16.2984 16.1009 15.3316 16.1009 13.4297V10.6172H16.34C17.0009 10.6172 17.5775 10.2656 17.8623 9.68555C17.9818 9.44297 17.9818 9.43594 17.9818 8.96484C17.9818 8.16328 18.3861 8.63789 13.872 4.12735C9.38608 -0.362108 9.83608 0.0246105 9.06967 0.00703239C8.67241 1.90735e-06 8.61264 0.00703239 8.42631 0.0843773ZM9.29467 1.08985C9.50209 1.18828 16.8498 8.54648 16.9271 8.72578C17.0009 8.90508 16.9939 9.05625 16.906 9.23203C16.7759 9.50274 16.6669 9.54141 15.9884 9.5625C15.3521 9.58008 15.3064 9.59414 15.1376 9.82266C15.0638 9.91758 15.0638 9.95625 15.0462 13.1063L15.0287 16.2949L14.9302 16.4602C14.8775 16.5516 14.7826 16.6676 14.7193 16.7133C14.4732 16.9031 14.3994 16.9102 13.0564 16.9102H11.8119V14.9414C11.8119 13.6512 11.7978 12.9129 11.7732 12.7898C11.6361 12.1289 11.1052 11.5594 10.4232 11.3449C10.1912 11.2711 10.1138 11.2676 9.03451 11.2676C7.77592 11.2676 7.71264 11.2746 7.26264 11.5031C6.81615 11.7281 6.40131 12.2836 6.29584 12.7898C6.27123 12.9129 6.25717 13.6512 6.25717 14.9414V16.9102H5.01264C3.66967 16.9102 3.59584 16.9031 3.34975 16.7133C3.28647 16.6676 3.19155 16.5516 3.13881 16.4602L3.04037 16.2949L3.02279 13.1063C3.00522 9.95625 3.00522 9.91758 2.93139 9.82266C2.76264 9.59414 2.71694 9.58008 2.08061 9.5625C1.40209 9.54141 1.29311 9.50274 1.16303 9.23203C1.07514 9.05625 1.06811 8.90508 1.14194 8.72578C1.21576 8.55 8.56694 1.1918 8.77084 1.08985C8.95014 1.00196 9.11537 1.00196 9.29467 1.08985Z" />
              </g>
            </svg>
            <h6>Add City</h6>
          </Link>
        </li>
    



        <li className="">
          <Link href="/admin/blog">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              viewBox="0 0 18 18"
            >
              <g>
                <path d="M8.42631 0.0843773C8.31381 0.130079 8.16264 0.210939 8.09233 0.260159C8.0185 0.309376 6.24311 2.0707 4.14076 4.17305C1.06108 7.25977 0.305216 8.0332 0.231388 8.18086C-0.106112 8.86289 0.00638798 9.6082 0.523185 10.1285C0.846623 10.4484 1.25795 10.6172 1.72904 10.6172H1.96811V13.4297C1.96811 15.3316 1.98217 16.2984 2.00678 16.425C2.14037 17.0648 2.65717 17.6449 3.29701 17.8664C3.52905 17.9473 3.54662 17.9473 5.24467 17.9473C6.91811 17.9473 6.95678 17.9473 7.0517 17.8734C7.10444 17.8348 7.18178 17.7574 7.22045 17.7047C7.29428 17.6098 7.29428 17.5641 7.31186 15.2613L7.32944 12.9129L7.43491 12.7406C7.5685 12.5262 7.8392 12.3539 8.09936 12.3223C8.1978 12.3082 8.68998 12.3047 9.19272 12.3117L10.1068 12.3223L10.2931 12.4242C10.4689 12.5227 10.5814 12.6387 10.6904 12.832C10.729 12.9059 10.7431 13.3383 10.7572 15.2648C10.7747 17.5641 10.7747 17.6098 10.8486 17.7047C10.8872 17.7574 10.9646 17.8348 11.0173 17.8734C11.1122 17.9473 11.1509 17.9473 12.8244 17.9473C14.5224 17.9473 14.54 17.9473 14.772 17.8664C15.4119 17.6449 15.9287 17.0648 16.0623 16.425C16.0869 16.2984 16.1009 15.3316 16.1009 13.4297V10.6172H16.34C17.0009 10.6172 17.5775 10.2656 17.8623 9.68555C17.9818 9.44297 17.9818 9.43594 17.9818 8.96484C17.9818 8.16328 18.3861 8.63789 13.872 4.12735C9.38608 -0.362108 9.83608 0.0246105 9.06967 0.00703239C8.67241 1.90735e-06 8.61264 0.00703239 8.42631 0.0843773ZM9.29467 1.08985C9.50209 1.18828 16.8498 8.54648 16.9271 8.72578C17.0009 8.90508 16.9939 9.05625 16.906 9.23203C16.7759 9.50274 16.6669 9.54141 15.9884 9.5625C15.3521 9.58008 15.3064 9.59414 15.1376 9.82266C15.0638 9.91758 15.0638 9.95625 15.0462 13.1063L15.0287 16.2949L14.9302 16.4602C14.8775 16.5516 14.7826 16.6676 14.7193 16.7133C14.4732 16.9031 14.3994 16.9102 13.0564 16.9102H11.8119V14.9414C11.8119 13.6512 11.7978 12.9129 11.7732 12.7898C11.6361 12.1289 11.1052 11.5594 10.4232 11.3449C10.1912 11.2711 10.1138 11.2676 9.03451 11.2676C7.77592 11.2676 7.71264 11.2746 7.26264 11.5031C6.81615 11.7281 6.40131 12.2836 6.29584 12.7898C6.27123 12.9129 6.25717 13.6512 6.25717 14.9414V16.9102H5.01264C3.66967 16.9102 3.59584 16.9031 3.34975 16.7133C3.28647 16.6676 3.19155 16.5516 3.13881 16.4602L3.04037 16.2949L3.02279 13.1063C3.00522 9.95625 3.00522 9.91758 2.93139 9.82266C2.76264 9.59414 2.71694 9.58008 2.08061 9.5625C1.40209 9.54141 1.29311 9.50274 1.16303 9.23203C1.07514 9.05625 1.06811 8.90508 1.14194 8.72578C1.21576 8.55 8.56694 1.1918 8.77084 1.08985C8.95014 1.00196 9.11537 1.00196 9.29467 1.08985Z" />
              </g>
            </svg>
            <h6>All Blogs</h6>
          </Link>
        </li>
    



        <li className="">
          <Link href="/admin/blog/create">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              viewBox="0 0 18 18"
            >
              <g>
                <path d="M8.42631 0.0843773C8.31381 0.130079 8.16264 0.210939 8.09233 0.260159C8.0185 0.309376 6.24311 2.0707 4.14076 4.17305C1.06108 7.25977 0.305216 8.0332 0.231388 8.18086C-0.106112 8.86289 0.00638798 9.6082 0.523185 10.1285C0.846623 10.4484 1.25795 10.6172 1.72904 10.6172H1.96811V13.4297C1.96811 15.3316 1.98217 16.2984 2.00678 16.425C2.14037 17.0648 2.65717 17.6449 3.29701 17.8664C3.52905 17.9473 3.54662 17.9473 5.24467 17.9473C6.91811 17.9473 6.95678 17.9473 7.0517 17.8734C7.10444 17.8348 7.18178 17.7574 7.22045 17.7047C7.29428 17.6098 7.29428 17.5641 7.31186 15.2613L7.32944 12.9129L7.43491 12.7406C7.5685 12.5262 7.8392 12.3539 8.09936 12.3223C8.1978 12.3082 8.68998 12.3047 9.19272 12.3117L10.1068 12.3223L10.2931 12.4242C10.4689 12.5227 10.5814 12.6387 10.6904 12.832C10.729 12.9059 10.7431 13.3383 10.7572 15.2648C10.7747 17.5641 10.7747 17.6098 10.8486 17.7047C10.8872 17.7574 10.9646 17.8348 11.0173 17.8734C11.1122 17.9473 11.1509 17.9473 12.8244 17.9473C14.5224 17.9473 14.54 17.9473 14.772 17.8664C15.4119 17.6449 15.9287 17.0648 16.0623 16.425C16.0869 16.2984 16.1009 15.3316 16.1009 13.4297V10.6172H16.34C17.0009 10.6172 17.5775 10.2656 17.8623 9.68555C17.9818 9.44297 17.9818 9.43594 17.9818 8.96484C17.9818 8.16328 18.3861 8.63789 13.872 4.12735C9.38608 -0.362108 9.83608 0.0246105 9.06967 0.00703239C8.67241 1.90735e-06 8.61264 0.00703239 8.42631 0.0843773ZM9.29467 1.08985C9.50209 1.18828 16.8498 8.54648 16.9271 8.72578C17.0009 8.90508 16.9939 9.05625 16.906 9.23203C16.7759 9.50274 16.6669 9.54141 15.9884 9.5625C15.3521 9.58008 15.3064 9.59414 15.1376 9.82266C15.0638 9.91758 15.0638 9.95625 15.0462 13.1063L15.0287 16.2949L14.9302 16.4602C14.8775 16.5516 14.7826 16.6676 14.7193 16.7133C14.4732 16.9031 14.3994 16.9102 13.0564 16.9102H11.8119V14.9414C11.8119 13.6512 11.7978 12.9129 11.7732 12.7898C11.6361 12.1289 11.1052 11.5594 10.4232 11.3449C10.1912 11.2711 10.1138 11.2676 9.03451 11.2676C7.77592 11.2676 7.71264 11.2746 7.26264 11.5031C6.81615 11.7281 6.40131 12.2836 6.29584 12.7898C6.27123 12.9129 6.25717 13.6512 6.25717 14.9414V16.9102H5.01264C3.66967 16.9102 3.59584 16.9031 3.34975 16.7133C3.28647 16.6676 3.19155 16.5516 3.13881 16.4602L3.04037 16.2949L3.02279 13.1063C3.00522 9.95625 3.00522 9.91758 2.93139 9.82266C2.76264 9.59414 2.71694 9.58008 2.08061 9.5625C1.40209 9.54141 1.29311 9.50274 1.16303 9.23203C1.07514 9.05625 1.06811 8.90508 1.14194 8.72578C1.21576 8.55 8.56694 1.1918 8.77084 1.08985C8.95014 1.00196 9.11537 1.00196 9.29467 1.08985Z" />
              </g>
            </svg>
            <h6>Add Blog</h6>
          </Link>
        </li>
    



    
        <li className="">
          <Link href="/admin/service">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              viewBox="0 0 18 18"
            >
              <g>
                <path d="M8.42631 0.0843773C8.31381 0.130079 8.16264 0.210939 8.09233 0.260159C8.0185 0.309376 6.24311 2.0707 4.14076 4.17305C1.06108 7.25977 0.305216 8.0332 0.231388 8.18086C-0.106112 8.86289 0.00638798 9.6082 0.523185 10.1285C0.846623 10.4484 1.25795 10.6172 1.72904 10.6172H1.96811V13.4297C1.96811 15.3316 1.98217 16.2984 2.00678 16.425C2.14037 17.0648 2.65717 17.6449 3.29701 17.8664C3.52905 17.9473 3.54662 17.9473 5.24467 17.9473C6.91811 17.9473 6.95678 17.9473 7.0517 17.8734C7.10444 17.8348 7.18178 17.7574 7.22045 17.7047C7.29428 17.6098 7.29428 17.5641 7.31186 15.2613L7.32944 12.9129L7.43491 12.7406C7.5685 12.5262 7.8392 12.3539 8.09936 12.3223C8.1978 12.3082 8.68998 12.3047 9.19272 12.3117L10.1068 12.3223L10.2931 12.4242C10.4689 12.5227 10.5814 12.6387 10.6904 12.832C10.729 12.9059 10.7431 13.3383 10.7572 15.2648C10.7747 17.5641 10.7747 17.6098 10.8486 17.7047C10.8872 17.7574 10.9646 17.8348 11.0173 17.8734C11.1122 17.9473 11.1509 17.9473 12.8244 17.9473C14.5224 17.9473 14.54 17.9473 14.772 17.8664C15.4119 17.6449 15.9287 17.0648 16.0623 16.425C16.0869 16.2984 16.1009 15.3316 16.1009 13.4297V10.6172H16.34C17.0009 10.6172 17.5775 10.2656 17.8623 9.68555C17.9818 9.44297 17.9818 9.43594 17.9818 8.96484C17.9818 8.16328 18.3861 8.63789 13.872 4.12735C9.38608 -0.362108 9.83608 0.0246105 9.06967 0.00703239C8.67241 1.90735e-06 8.61264 0.00703239 8.42631 0.0843773ZM9.29467 1.08985C9.50209 1.18828 16.8498 8.54648 16.9271 8.72578C17.0009 8.90508 16.9939 9.05625 16.906 9.23203C16.7759 9.50274 16.6669 9.54141 15.9884 9.5625C15.3521 9.58008 15.3064 9.59414 15.1376 9.82266C15.0638 9.91758 15.0638 9.95625 15.0462 13.1063L15.0287 16.2949L14.9302 16.4602C14.8775 16.5516 14.7826 16.6676 14.7193 16.7133C14.4732 16.9031 14.3994 16.9102 13.0564 16.9102H11.8119V14.9414C11.8119 13.6512 11.7978 12.9129 11.7732 12.7898C11.6361 12.1289 11.1052 11.5594 10.4232 11.3449C10.1912 11.2711 10.1138 11.2676 9.03451 11.2676C7.77592 11.2676 7.71264 11.2746 7.26264 11.5031C6.81615 11.7281 6.40131 12.2836 6.29584 12.7898C6.27123 12.9129 6.25717 13.6512 6.25717 14.9414V16.9102H5.01264C3.66967 16.9102 3.59584 16.9031 3.34975 16.7133C3.28647 16.6676 3.19155 16.5516 3.13881 16.4602L3.04037 16.2949L3.02279 13.1063C3.00522 9.95625 3.00522 9.91758 2.93139 9.82266C2.76264 9.59414 2.71694 9.58008 2.08061 9.5625C1.40209 9.54141 1.29311 9.50274 1.16303 9.23203C1.07514 9.05625 1.06811 8.90508 1.14194 8.72578C1.21576 8.55 8.56694 1.1918 8.77084 1.08985C8.95014 1.00196 9.11537 1.00196 9.29467 1.08985Z" />
              </g>
            </svg>
            <h6>All Services</h6>
          </Link>
        </li>
    



        <li className="">
          <Link href="/admin/service/create">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              viewBox="0 0 18 18"
            >
              <g>
                <path d="M8.42631 0.0843773C8.31381 0.130079 8.16264 0.210939 8.09233 0.260159C8.0185 0.309376 6.24311 2.0707 4.14076 4.17305C1.06108 7.25977 0.305216 8.0332 0.231388 8.18086C-0.106112 8.86289 0.00638798 9.6082 0.523185 10.1285C0.846623 10.4484 1.25795 10.6172 1.72904 10.6172H1.96811V13.4297C1.96811 15.3316 1.98217 16.2984 2.00678 16.425C2.14037 17.0648 2.65717 17.6449 3.29701 17.8664C3.52905 17.9473 3.54662 17.9473 5.24467 17.9473C6.91811 17.9473 6.95678 17.9473 7.0517 17.8734C7.10444 17.8348 7.18178 17.7574 7.22045 17.7047C7.29428 17.6098 7.29428 17.5641 7.31186 15.2613L7.32944 12.9129L7.43491 12.7406C7.5685 12.5262 7.8392 12.3539 8.09936 12.3223C8.1978 12.3082 8.68998 12.3047 9.19272 12.3117L10.1068 12.3223L10.2931 12.4242C10.4689 12.5227 10.5814 12.6387 10.6904 12.832C10.729 12.9059 10.7431 13.3383 10.7572 15.2648C10.7747 17.5641 10.7747 17.6098 10.8486 17.7047C10.8872 17.7574 10.9646 17.8348 11.0173 17.8734C11.1122 17.9473 11.1509 17.9473 12.8244 17.9473C14.5224 17.9473 14.54 17.9473 14.772 17.8664C15.4119 17.6449 15.9287 17.0648 16.0623 16.425C16.0869 16.2984 16.1009 15.3316 16.1009 13.4297V10.6172H16.34C17.0009 10.6172 17.5775 10.2656 17.8623 9.68555C17.9818 9.44297 17.9818 9.43594 17.9818 8.96484C17.9818 8.16328 18.3861 8.63789 13.872 4.12735C9.38608 -0.362108 9.83608 0.0246105 9.06967 0.00703239C8.67241 1.90735e-06 8.61264 0.00703239 8.42631 0.0843773ZM9.29467 1.08985C9.50209 1.18828 16.8498 8.54648 16.9271 8.72578C17.0009 8.90508 16.9939 9.05625 16.906 9.23203C16.7759 9.50274 16.6669 9.54141 15.9884 9.5625C15.3521 9.58008 15.3064 9.59414 15.1376 9.82266C15.0638 9.91758 15.0638 9.95625 15.0462 13.1063L15.0287 16.2949L14.9302 16.4602C14.8775 16.5516 14.7826 16.6676 14.7193 16.7133C14.4732 16.9031 14.3994 16.9102 13.0564 16.9102H11.8119V14.9414C11.8119 13.6512 11.7978 12.9129 11.7732 12.7898C11.6361 12.1289 11.1052 11.5594 10.4232 11.3449C10.1912 11.2711 10.1138 11.2676 9.03451 11.2676C7.77592 11.2676 7.71264 11.2746 7.26264 11.5031C6.81615 11.7281 6.40131 12.2836 6.29584 12.7898C6.27123 12.9129 6.25717 13.6512 6.25717 14.9414V16.9102H5.01264C3.66967 16.9102 3.59584 16.9031 3.34975 16.7133C3.28647 16.6676 3.19155 16.5516 3.13881 16.4602L3.04037 16.2949L3.02279 13.1063C3.00522 9.95625 3.00522 9.91758 2.93139 9.82266C2.76264 9.59414 2.71694 9.58008 2.08061 9.5625C1.40209 9.54141 1.29311 9.50274 1.16303 9.23203C1.07514 9.05625 1.06811 8.90508 1.14194 8.72578C1.21576 8.55 8.56694 1.1918 8.77084 1.08985C8.95014 1.00196 9.11537 1.00196 9.29467 1.08985Z" />
              </g>
            </svg>
            <h6>Add Service</h6>
          </Link>
        </li>
    
    

      </ul>
    </div>
  </div>
  )
}
